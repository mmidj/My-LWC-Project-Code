
import { getFieldDisplayValue, getFieldValue, getRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire } from 'lwc';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import ACC_NUMBER_FIELD from '@salesforce/schema/Account.AccountNumber';
import RATING_FIELD from '@salesforce/schema/Account.Rating';

const FIELDS = [NAME_FIELD,TYPE_FIELD,INDUSTRY_FIELD,ANNUAL_REVENUE_FIELD,ACC_NUMBER_FIELD,RATING_FIELD];

export default class GetRecordAccount extends LightningElement {

/*Use-Case: Display the following Account Fields by using the getREcord Wire Adapter
Name - Type - Industry - AnnualRevenue - Account Number - Rating 
*/    
    /**Way-1 Starts here */
    accName1;
    accType1;
    accIndustry1;
    annualRevenue1;
    accNum1;
    accRating1;


    recordId = '0018Y00002xfaviQAA';
    @wire(getRecord,{recordId:'$recordId', fields:FIELDS})
    accountInfo1({data,error}){
        if(data){
            console.log(data);            
            this.accName1 = data.fields.Name.value;
            this.accType1 = data.fields.Type.value;
            this.accIndustry1 = data.fields.Industry.value;
            this.annualRevenue1 = data.fields.AnnualRevenue.displayValue;
            this.accNum1 = data.fields.AccountNumber.value;
            this.accRating1 = data.fields.Rating.value;

        };
        if(error){
            console.log(error);
        }
        
    }
     /**Way-1 Ends here */

     /**Way-2 Starts here */
    accName2;
    accType2;
    accIndustry2;
    annualRevenue2;
    accNum2;
    accRating2;


    recordId = '0018Y00002xfaviQAA';
    @wire(getRecord,{recordId:'$recordId', fields:FIELDS})
    accountInfo2({data,error}){
        if(data){
            console.log(data);            
            this.accName2 = getFieldValue(data,NAME_FIELD);
            this.accType2 = getFieldValue(data,TYPE_FIELD);
            this.accIndustry2 = getFieldValue(data,INDUSTRY_FIELD);
            this.annualRevenue2 = getFieldDisplayValue(data,ANNUAL_REVENUE_FIELD);
            this.accNum2 = getFieldValue(data,ACC_NUMBER_FIELD);
            this.accRating2 = getFieldValue(data,RATING_FIELD);

        };
        if(error){
            console.log(error);
        }
        
    }
}