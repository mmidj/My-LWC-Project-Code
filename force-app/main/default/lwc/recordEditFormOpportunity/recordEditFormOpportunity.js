import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import ACCOUNT_FIELD from '@salesforce/schema/Opportunity.AccountId';
import TYPE_FIELD from '@salesforce/schema/Opportunity.Type';
import LEAD_SOURCE_FIELD from '@salesforce/schema/Opportunity.LeadSource';
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';
import CLOSE_DATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';
import AMOUNT_FIELD from '@salesforce/schema/Opportunity.Amount';


export default class RecordEditFormOpportunity extends LightningElement {
    
    recordId = "0068Y00001KngWYQAZ";
    objectName = OPPORTUNITY_OBJECT;
    showContent = true;
    fields = {
        name : NAME_FIELD,
        account : ACCOUNT_FIELD,
        type : TYPE_FIELD,
        lead : LEAD_SOURCE_FIELD,
        stage : STAGE_FIELD,
        closeDate : CLOSE_DATE_FIELD,
        amount : AMOUNT_FIELD
    }
     successHandler(){
        const successToast = new ShowToastEvent({
            title : "SUCCESS!!!",
            message : "The Opportunity record has been saved successfully!!!",
            variant : "success",
            mode : "pester"
        });
        this.dispatchEvent(successToast);
     }

}