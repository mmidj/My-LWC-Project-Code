import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import EMPLOYEES_FIELD from '@salesforce/schema/Account.NumberOfEmployees';
import BILLING_ADDRESS_FIELD from '@salesforce/schema/Account.BillingAddress';

export default class RecordFormAccount extends LightningElement {
    // Use-Case:Create a LWC Component that displays the four record fields of an Account object. Fields are: Name, Type, Industry, AnnualRevenue

    recordId = "0018Y00002xfavgQAA";
    objectName = ACCOUNT_OBJECT;
    fields = [NAME_FIELD,TYPE_FIELD,INDUSTRY_FIELD,REVENUE_FIELD,EMPLOYEES_FIELD,BILLING_ADDRESS_FIELD];

    /*-Steps to write ShowToastEvent
        1. import ShowToastEvent to your JS.
        2. write a method and name it as you wish
        3. create an instance of ShowToastEvent and name it as you wish
        4. pass an object inside of your instance with four parameters(title,message,variant and mode)
        5.dispatch your event in JS and create an eventHandler in HTML.
     */
    showSuccessMessage (){
        const successMsg = new ShowToastEvent({
            title : "SUCCESS!!",
            message : " The account record has been updated successfully!",
            variant : "success",
            mode : "sticky"
        });
        this.dispatchEvent(successMsg);
    }

}