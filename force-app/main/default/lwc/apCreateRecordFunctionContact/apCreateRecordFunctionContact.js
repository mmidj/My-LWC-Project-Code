import { createRecord } from 'lightning/uiRecordApi';
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import CONTACT_OBJECT from '@salesforce/schema/Contact';

export default class ApCreateRecordFunctionContact extends LightningElement {

    /*Use-case-5: Prepare a lightning web component create form by using createRecord function Contact Object and have the following fields on the form. Please display a success or error message events upon saving of the record.
    Firstname, Lastname, Email, Phone, Account Name Email Opt Out
    Department Birthdate
    */
   formData ={};

   changeHandler(event){
        
    //Note: If the variable name and the target final name is the same, JS property will drop the final not notation like below actual code.
    
    //const name = event.target.name;
    //const value = event.target.value;
    const {name,value} = event.target;       
    this.formData[name] = value;
}

    createContact(){
        const recordInput = {
            apiName : CONTACT_OBJECT.objectApiName,
            fields : this.formData
        }

        createRecord(recordInput)
            .then(result => {
                console.log(result);
                this.template.querySelector('form.contactForm').reset();
                this.formData = {};
                this.showToastSuccess();
            })
            .catch(error => {
            console.log(error);
            this.showToastError();
        })
    }

    showToastSuccess(){
        const showSuccessMsg = new ShowToastEvent({
            title: "SUCCESS!!!",
            message : "the contact record has been saved successfully!!",
            variant :"success",
            mode :"sticky"
        });
        this.dispatchEvent(showSuccessMsg);
    }

    showToastError(){
        const showErrorMsg = new ShowToastEvent({
            title: "SUCCESS!!!",
            message : "Error occurred. Please check your code!",
            variant :"error",
            mode :"sticky"
        });
        this.dispatchEvent(showErrorMsg);
    }



   /*
   formData ={
    apiName : value that user enter
   }
   */
}