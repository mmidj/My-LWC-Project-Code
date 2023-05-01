import { LightningElement, wire } from 'lwc';
import getOppsByStage from '@salesforce/apex/ApexLwcOpportunityController.getOppsByStage';

const COLUMNS = [
    {label : "Opportunity Name", fieldName : "Name", type : "text"},
    {label : "Type", fieldName : "Type", type : "text"},
    {label : "Amount", fieldName : "Amount", type : "currency"},
    {label : "Stage Name", fieldName : "StageName", type : "text"},
    {label : "Lead Source", fieldName : "LeadSource", type : "text"}
];

export default class ApexLwcGetOppsByStage extends LightningElement {

    stgName = 'Prospecting';
    columns = COLUMNS;
    @wire(getOppsByStage,{stage: '$stgName'})
    opps;

}