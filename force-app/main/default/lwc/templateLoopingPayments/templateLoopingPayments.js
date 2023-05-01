import { LightningElement } from 'lwc';

export default class TemplateLoopingPayments extends LightningElement {

    payments = [
        {
            id : 1,
            type : "Internet Allowance",
            amount : "$100",
            paid :true
        },
        {
            id : 2,
            type : "Work From Home Allowance",
            amount : "$500",
            paid :false
        },
        {
            id : 3,
            type : "Well Being Allowance",
            amount : "$1000",
            paid :false
        },
        {
            id : 4,
            type : "Transportation Allowance",
            amount : "$750",
            paid :true
        }
    ];

    
}