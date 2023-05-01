import { deleteRecord } from 'lightning/uiRecordApi';
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class DeleteRecordFunctionCase extends LightningElement {
    // Use-Case: Create a LWC Component to delete Case records when we pass the recordId in the Lightning Input box.

    
    recordId;
    changeHandler(event){
        this.recordId = event.target.value;
    }

    deleteRec(){
        deleteRecord(this.recordId)
            .then(result =>{
                console.log(result);
                this.template.querySelector('form.caseForm').reset();
                this.showToastSuccess();
            })
            .catch(error=>{
                console.log(error);
                this.showToastError();
                this.template.querySelector('form.caseForm').reset();
            })
    }

    showToastSuccess(){
        const showSuccessMsg = new ShowToastEvent({
            title : "SUCCESS!!!",
            message : "You have successfully deleted a record!!",
            variant : "success",
            mode : "dismissible"
        });
        this.dispatchEvent(showSuccessMsg);
    }

    showToastError(){
        const showErrorMsg = new ShowToastEvent({
            title : "ERROR!!!!",
            message : "Error occurred while deleting the record. Please check your code or system.",
            variant : "error",
            mode : "pester"
        });
        this.dispatchEvent(showErrorMsg);
    }
}