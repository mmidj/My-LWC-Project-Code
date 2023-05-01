import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class GetObjectInfoAccount extends LightningElement {
    
    defaultRtId;
    objName;
    vendorRtId;
    @wire(getObjectInfo,{objectApiName : ACCOUNT_OBJECT})
    accountInfo({data, error}){
        if(data){
            console.log(data);
            this.defaultRtId = data.defaultRecordTypeId;
            this.objName = data.apiName;
            const recordTypeIds = data.recordTypeInfos;
            this.vendorRtId = Object.keys(recordTypeIds).find(w => recordTypeIds[w].name ==='Vendor');

        };
        if(error){
            console.log(error);
        }
            
        
        
        
        
        
        
    };
}