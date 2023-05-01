import { LightningElement } from 'lwc';

export default class Getters extends LightningElement {

    num1 = 20;
    num2 = 30;

    productOfNumbers = this.num1 * this.num2;

    get multiplyNumbers() {
           var product = this.num1 * this.num2;
           return product;
    }


    salesforceCertifications = ["SF Admin", "Platform Dev I","Platform App Builder"," System Architect"];

    get certification (){
        var cert =  this.salesforceCertifications[1];
        return cert;
    }
}