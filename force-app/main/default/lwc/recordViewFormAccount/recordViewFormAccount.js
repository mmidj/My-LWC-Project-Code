import { LightningElement } from 'lwc';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import NUMBER_OF_EMPLOYEES_FIELD from '@salesforce/schema/Account.NumberOfEmployees';
import BILLING_ADDRESS_FIELD from '@salesforce/schema/Account.BillingAddress';

export default class RecordViewFormAccount extends LightningElement {


    // Use-Case: Display a set of account fields using lightning-record-view-form. Name, Type, Industry, Annual Revenue, Number of Employees, Billing Address

    recordId = "0018Y00002xfavgQAA";
    objectName = ACCOUNT_OBJECT;

    fields = {
        name : NAME_FIELD,
        type : TYPE_FIELD,
        industry : INDUSTRY_FIELD,
        revenue : ANNUAL_REVENUE_FIELD,
        numberEmp : NUMBER_OF_EMPLOYEES_FIELD,
        bilAddress : BILLING_ADDRESS_FIELD

    };


}