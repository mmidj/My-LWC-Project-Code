import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ShowToastEventExamples extends LightningElement {

 /*Steps to write ShowToastEvent
        1. import ShowToastEvent to your JS.
        2. write a method and name it as you wish
        3. create an instance of ShowToastEvent and name it as you wish
        4. pass an object inside of your instance with four parameters(title,message,variant and mode)
        5.dispatch your event in JS and create an eventHandler in HTML.
*/
    
    
    showToastInfo(){
        const showInfoMsg = new ShowToastEvent({
            title : "INFORMATION!!!",
            message : "This is a sample information ShowToastEvent Message. Hope you liked it :)",
            variant : "information",
            mode : "sticky"
        });
        this.dispatchEvent(showInfoMsg);
    }

    showToastError(){
        const showErrorMsg = new ShowToastEvent({
            title : "ERROR!!!",
            message : "This is a sample Error ShowToastEvent Message. Hope you liked it :)",
            variant : "error",
            mode : "pester"
        });
        this.dispatchEvent(showErrorMsg);
    }

    showToastSuccess(){
        const showSuccessMsg = new ShowToastEvent({
            title : "SUCCESS!!!",
            message : "This is a sample Success ShowToastEvent Message. Hope you liked it :)",
            variant : "success",
            mode : "dismissible"
        });
        this.dispatchEvent(showSuccessMsg);
    }

    showToastWarning(){
        const showWarningMsg = new ShowToastEvent({
            title : "WARNING!!!",
            message : "This is a sample Warning ShowToastEvent Message. Hope you liked it :)",
            variant : "warning",
            mode : "dismissible"
        });
        this.dispatchEvent(showWarningMsg);
    }
}