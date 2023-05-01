import { LightningElement, wire } from 'lwc';
import { getFieldDisplayValue, getFieldValue, getRecord } from 'lightning/uiRecordApi';

import ACCOUNT_NAME_FIELD from '@salesforce/schema/Case.Account.Name';
import SUBJECT_FIELD from '@salesforce/schema/Case.Subject';
import PRIORITY_FIELD from '@salesforce/schema/Case.Priority';
import REASON_FIELD from '@salesforce/schema/Case.Reason';
import TYPE_FIELD from '@salesforce/schema/Case.Type';
import STATUS_FIELD from '@salesforce/schema/Case.Status';


const FIELDS = [ACCOUNT_NAME_FIELD,SUBJECT_FIELD,PRIORITY_FIELD,REASON_FIELD,TYPE_FIELD,STATUS_FIELD];

export default class ApGetRecordsAdapterCase extends LightningElement {

    /*Create a lightning web component that displays the following 
    field values from the Case Object for a given record id by using the getRecord Adapter please use the getValue and getDisplayValue functions with that.
	Account Name Subject Priority Reason Type Status
    */
    accName;
    subject;
    priority;
    reason;
    type;
    status;
    recordId ='5008Y000029Jn6HQAS' ;
    @wire(getRecord,{recordId:'$recordId', fields:FIELDS})
    caseInfo({data,error}){
        if(data){
           console.log(data);
           this.accName = getFieldValue(data,ACCOUNT_NAME_FIELD);
           this.subject = getFieldValue(data,SUBJECT_FIELD);
           this.priority = getFieldDisplayValue(data,PRIORITY_FIELD);
           this.reason = getFieldDisplayValue(data,REASON_FIELD);
           this.type = getFieldDisplayValue(data,TYPE_FIELD);
           this.status = getFieldDisplayValue(data,STATUS_FIELD);
        }
        if(error){
            console.log(error);
        }
    }
}