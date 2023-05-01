import { updateRecord } from 'lightning/uiRecordApi';
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class UpdateRecordCase extends LightningElement {

    //Use-Case: create a LWC component and update the following fields of the Case Object. Subject - Description - Origin
    
    recordId = '5008Y000029Jn6SQAS';
    formData = {};

    changeHandler(event){
        //const name = event.target.name;
        //const value = event.target.value;

        const{name,value} = event.target;
        this.formData['Id'] = this.recordId;
        this.formData[name] = value;
    }

    updateCase(){

        const recordInput = {
            fields : this.formData
        };
        updateRecord(recordInput)
            .then(result => {
                console.log(result);
                this.template.querySelector('form.caseForm').reset();
                this.formData = {};
                this.showToastSuccess();
            })
            .catch(error=>{
                console.log(error);
            })
    }

    showToastSuccess(){
        const showSuccessMsg = new ShowToastEvent({
            title : "SUCCESS!!!",
            message : "The Case record has been updated successfully!!!",
            variant : "success",
            mode : "dismissible"
        });
        this.dispatchEvent(showSuccessMsg);
    }


    /*
    formData = {
        Id : 5008Y000029Jn6SQAS,
        Subject : ''tetefefefef',
        Description :'fdfdfdfd'

    }
    */
}