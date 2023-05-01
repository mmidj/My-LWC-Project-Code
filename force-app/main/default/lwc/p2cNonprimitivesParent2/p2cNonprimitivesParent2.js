import { LightningElement, wire } from 'lwc';
import getRecentaccounts from '@salesforce/apex/ApexLwcAccountController.getRecentaccounts';

const COLUMNS = [
    { label: 'Account Name', fieldName: 'Name' },
    { label: 'Type', fieldName: 'Type' },
    { label: 'Industry', fieldName: 'Industry' },
    { label: 'Annual Revenue', fieldName: 'AnnualRevenue', type: 'currency' }
    ];

export default class P2cNonprimitivesParent2 extends LightningElement {

    columns = COLUMNS
    @wire(getRecentaccounts)
    accounts;
}