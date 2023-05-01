import { LightningElement } from 'lwc';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import EMPLOYEES_FIELD from '@salesforce/schema/Account.NumberOfEmployees';
import BILLING_ADDRESS_FIELD from '@salesforce/schema/Account.BillingAddress';

export default class RecordViewFormAccountRendering extends LightningElement {

recordId = "0018Y00002xfavgQAA";
objectName = ACCOUNT_OBJECT;
showFields = false;


fields = {
    name : NAME_FIELD,
    type : TYPE_FIELD,
    industry : INDUSTRY_FIELD,
    revenue : REVENUE_FIELD,
    employee : EMPLOYEES_FIELD,
    billing : BILLING_ADDRESS_FIELD    
}
 
toggleFields (){
    this.showFields = !this.showFields;
}

}