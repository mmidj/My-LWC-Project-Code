import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/ApexLwcAccountController.getAccounts';

const COLUMNS = [
    {label : "Account Name", fieldName : "Name", type : "text"},
    {label : "Account Type", fieldName : "Type", type : "text"},
    {label : "Industry", fieldName : "Industry", type : "text"},
    {label : "Annual Revenue", fieldName : "AnnualRevenue", type : "currency"}
];


export default class ApexLwcGetAccounts extends LightningElement {
    columns = COLUMNS;

    @wire(getAccounts)
    accounts;

}