import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import INDUSTRY_FIELD1 from '@salesforce/schema/Account.Industry';


export default class GetPicklistValuesAccount extends LightningElement {
    //Use-Case: Create a component that shows the picklist values of the Industry Fields for Vendor Record Type on Account Object.

    vendorRtId;
    errorMsg;
    errorMsgPick;
    industryOptionsC = [];
    industryOptionsV = [];
    selectedValueC;
    selectedValueV;
    customerRtId;
      
    @wire(getObjectInfo,{objectApiName : ACCOUNT_OBJECT })
    accountInfo({data,error}){
        if(data){
            console.log(data);
            const recordIdsMap = data.recordTypeInfos;
            this.vendorRtId = Object.keys(recordIdsMap).find(w =>recordIdsMap[w].name==='Vendor');
            this.customerRtId = data.defaultRecordTypeId;;
        };
        if(error){
            console.log(error);
            this.errorMsg = error;
        };
    };

    @wire(getPicklistValues,{fieldApiName :INDUSTRY_FIELD1, recordTypeId :'$customerRtId' })
     picklistValuesInfoC({data,error}){
       if(data){
        console.log(data);
         this.industryOptionsC = this.picklistGenerator(data);         
       };

       if(error){
        console.log(error);
        this.errorMsgPick = error;
        this.errorType = this.errorMsgPick.errorType;
       };

    };

    @wire(getPicklistValues,{fieldApiName : INDUSTRY_FIELD, recordTypeId :'$vendorRtId'})
    picklistValuesInfoV({data,error}){
       if(data){
        console.log(data);
         this.industryOptionsV = this.picklistGenerator(data);
       };

       if(error){
        console.log(error);
        this.errorMsgPick = error;
       };
    };


    picklistGenerator(data){
        return data.values.map(item => ({
            label : item.label,
            value : item.value
        }));
    }

    customerEventHandler(event){
        this.selectedValueC = event.target.value;
    }
    vendorEventHandler(event){
       this.selectedValueV = event.target.value;
    }
}