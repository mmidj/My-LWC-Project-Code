import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import ACC_NUMBER_FIELD from '@salesforce/schema/Account.AccountNumber';
import RATING_FIELD from '@salesforce/schema/Account.Rating';

export default class ApRecordFormAccount extends LightningElement {

    /*
    Create a lightning base component that would display the following account fields in view mode. The fields should be edited by the SF Admin if needed.
		Account Name
		Account Type
		Industry
		Annual Revenue
		Account Number
		Rating
    Show a success message upon saving the record successfully and error message in case of any error by using ”onerror” event.
    */
    recordId = '0018Y00002xfavgQAA';
    objectName = ACCOUNT_OBJECT;
    fields = [NAME_FIELD,TYPE_FIELD,INDUSTRY_FIELD,ANNUAL_REVENUE_FIELD,ACC_NUMBER_FIELD,RATING_FIELD];

    successHandler(){
        const successMsg = new ShowToastEvent({
            title : "SUCCESS!!!",
            message : "The Account record has been saved successfully!!!",
            variant : "success",
            mode : "dismissible"
        });
        this.dispatchEvent(successMsg);
    }

    errorHandler(){
        const errorMsg = new ShowToastEvent({
            title : "ERROR!!!",
            message : "The Account record has not been saved. Error occurred. ",
            variant : "error",
            mode : "pester"
        });
        this.dispatchEvent(errorMsg);
    }
}