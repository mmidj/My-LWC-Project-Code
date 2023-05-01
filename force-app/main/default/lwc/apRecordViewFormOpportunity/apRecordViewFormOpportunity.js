import { LightningElement } from 'lwc';

import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import ACCOUNT_FIELD from '@salesforce/schema/Opportunity.AccountId';
import TYPE_FIELD from '@salesforce/schema/Opportunity.Type';
import LEAD_SOURCE_FIELD from '@salesforce/schema/Opportunity.LeadSource';
import STAGE_NAME_FIELD from '@salesforce/schema/Opportunity.StageName';
import CLOSE_DATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';
import AMOUNT_FIELD from '@salesforce/schema/Opportunity.Amount';



export default class ApRecordViewFormOpportunity extends LightningElement {
    /*
     Create a lightning web component that displays the following inputs from opportunity Object
        Opportunity Name 
        Account Name 
        Type 
        Lead Source 
        Stage 
        CloseDate 
        Amount
    Please render the CloseDate and Amount fields conditionally by clicking on a checkbox. 
    */
   showFields = false;
   recordId = '0068Y00001PUGRCQA5';
   objectName = OPPORTUNITY_OBJECT;
   fields = {
        name : NAME_FIELD,
        accName : ACCOUNT_FIELD,
        type :TYPE_FIELD,
        leadSource : LEAD_SOURCE_FIELD,
        stageName : STAGE_NAME_FIELD,
        closeDate : CLOSE_DATE_FIELD,
        amount : AMOUNT_FIELD
   }

   toggleFields(){
    this.showFields = !this.showFields;
   }
}