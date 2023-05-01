import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';

import CONTACT_OBJECT from '@salesforce/schema/Contact';

export default class GetObjectInfoContact extends LightningElement {
    
    defaultRtId;
    @wire(getObjectInfo,{objectApiName : CONTACT_OBJECT})
    contactInfo({data,error}){
        if(data){
            console.log(data);
             this.defaultRtId = data.defaultRecordTypeId;
        };
        if(error){
            console.log(error);
        };

    };
}