import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import CASE_OBJECT from '@salesforce/schema/Case';
import ACCOUNT_FIELD from '@salesforce/schema/Case.AccountId';
import CONTACT_FIELD from '@salesforce/schema/Case.ContactId';
import SUBJECT_FIELD from '@salesforce/schema/Case.Subject';
import PRIORITY_FIELD from '@salesforce/schema/Case.Priority';
import STATUS_FIELD from '@salesforce/schema/Case.Status';
import DESCRIPTION_FIELD from '@salesforce/schema/Case.Description';
import ORIGIN_FIELD from '@salesforce/schema/Case.Origin';


export default class ApRecordEditFormCase extends LightningElement {
   /*
     Create a lightning base component that would display the following Case fields. User should be able to edit a few fields as mentioned below.
        Account Name – ReadOnly
        Contact Name – ReadOnly
        Subject – Editable
        Priority – Editable
        Status – Editable 
        Description – Editable
        Origin – Editable

    Show a success message upon saving the record successfully and error message in case of any error by using ”onerror” event.
    */
    recordId = '5008Y000029Jn6RQAS';
    objectName = CASE_OBJECT;
    fields = {
        account : ACCOUNT_FIELD,
        contact : CONTACT_FIELD,
        subject : SUBJECT_FIELD,
        priority : PRIORITY_FIELD,
        status : STATUS_FIELD,
        description : DESCRIPTION_FIELD,
        origin : ORIGIN_FIELD
    };

    successHandler(){
        const successMsg = new ShowToastEvent({
            title : "SUCCESS!!!",
            message : "The Case REcord has been saved successfully!!!",
            variant : "success",
            mode : "dismissible"
        });
        this.dispatchEvent(successMsg);
    }

}