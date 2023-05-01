import { createRecord } from 'lightning/uiRecordApi';
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import CONTACT_OBJECT from '@salesforce/schema/Contact';

export default class CreateRecordFunctionContact extends LightningElement {
    
    formData = {};

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
        //Note: When your variable name and input name is the same, ignore one of them and JS will take case as below.
        //createRecord({recordInput:recordInput})
        createRecord(recordInput)
            .then(result => {
                console.log(result);
                this.template.querySelector('form.contactForm').reset();
                this.formData = {};
                this.showToastSuccess();
            })
            .catch(error => {
                console.log(error);

            })
    }

    showToastSuccess(){
        const showSuccessMsg = new ShowToastEvent({
            title : "SUCCESS!!!",
            message : "The Contact Record has been created successfully!!!",
            variant : "success",
            mode : "dismissible"
        });
        this.dispatchEvent(showSuccessMsg);
    }

    /*
        formData ={
           name(fieldApiName) : value (User value)
            FirstName : 'Jimmy',
            LastName : 'Thomas',
            Title : 'Developer',
        }
    */
    
    
    
}