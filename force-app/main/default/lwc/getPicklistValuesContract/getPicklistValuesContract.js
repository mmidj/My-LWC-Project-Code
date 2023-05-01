import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire} from 'lwc';
import CONTRACT_OBJECT from '@salesforce/schema/Contract';
import CONTRACT_TYPES_FIELD from '@salesforce/schema/Contract.Contract_Types__c';

export default class GetPicklistValuesContract extends LightningElement {

    errorMsg;
    errorMsgPick;
    renewalRtId;
    contractOptions = [];
    selectedValue;

    @wire(getObjectInfo,{objectApiName : CONTRACT_OBJECT })
    contractInfo({data,error}){
        if(data){
            console.log(data);
            const recordTypeIdsMap = data.recordTypeInfos;
            this.renewalRtId = Object.keys(recordTypeIdsMap).find(w => recordTypeIdsMap[w].name ==='Renewal');
        };
        if(error){
            console.log(error);
            this.errorMSg = error;
        };
    };

    @wire(getPicklistValues,{fieldApiName: CONTRACT_TYPES_FIELD, recordTypeId:'$renewalRtId'})
    picklistContract({data,error}){
        if(data){
            console.log(data);
            this.contractOptions = this.picklistGenerator(data);
        };
        if(error){
            console.log(error);
            this.errorMsgPick = error;
        };
    };

    picklistGenerator(data){
        return data.values.map(w => ({
            label : w.label,
            value : w.value
        }));
    }

    handleChange(event){
       this.selectedValue = event.target.value;
    }
}