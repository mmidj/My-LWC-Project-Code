import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';

export default class RecordFormOpportunity extends LightningElement {

    recordId = "0068Y00001PUGR9QAP";
    objectName = OPPORTUNITY_OBJECT;
    

    SuccessHandler(){
        const successToast = new ShowToastEvent({
            title : "SUCCESS!!!",
            message : "You have just updated the Opportunity record successfully!!!",
            variant : "success",
            mode : "pester"
        });
        this.dispatchEvent(successToast);
    }
}