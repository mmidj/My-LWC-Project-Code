import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FIRST_NAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';
import ACCOUNT_ID_FIELD from '@salesforce/schema/Contact.AccountId';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import DEPARTMENT_FIELD from '@salesforce/schema/Contact.Department';


export default class RecordFormContact extends LightningElement {
   
    /*Use-Case:
    Component Name: recordFormContact    
    Object: Contact    
    Record-Id: Pick one
    Fields: FirstName, LastName, AccountId, title, Email, Phone, Department
    OnSuccess: Show green color banner with a success message.
   */
   
    recordId = "0038Y00003cpAiUQAU";
    objectName=CONTACT_OBJECT;
    fields=[FIRST_NAME_FIELD,LAST_NAME_FIELD,ACCOUNT_ID_FIELD,TITLE_FIELD,EMAIL_FIELD,PHONE_FIELD,DEPARTMENT_FIELD];
    
    /*Steps to write ShowToastEvent
        1. import ShowToastEvent to your JS.
        2. write a method and name it as you wish
        3. create an instance of ShowToastEvent and name it as you wish
        4. pass an object inside of your instance with four parameters(title,message,variant and mode)
        5.dispatch your event in JS and create an eventHandler in HTML.
    */

    successMessage(){
        const successMsg = new ShowToastEvent ({
            title : "SUCCESS!!",
            message : "You have updated the record successfully!!!",
            variant : "success",
            mode :"sticky"
        });
        this.dispatchEvent(successMsg);
    }
}