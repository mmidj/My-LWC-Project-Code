import { LightningElement, wire } from 'lwc';
import getAccountsByType from '@salesforce/apex/ApexLwcAccountController.getAccountsByType';

const COLUMNS = [
    {label : "Account Name", fieldName : "Name", type : "text"},
    {label : "Account Type", fieldName : "Type", type : "text"},
    {label : "Industry", fieldName : "Industry", type : "text"},
    {label : "Annual Revenue", fieldName : "AnnualRevenue", type : "currency"}
];

export default class ApexLwcGetAccountByType extends LightningElement {
    accountType = 'Customer - Direct';
    columns=COLUMNS;
    @wire(getAccountsByType, {type:'$accountType'})
    accounts;
}