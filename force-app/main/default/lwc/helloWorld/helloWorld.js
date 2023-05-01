import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    name = "Isaac Gordon";
    certificationNumber = 4;
    certifications = ["Administrator","Platform App Builder","CPQ","System Architect"];

    location = {
        city : "Houston",
        country : "USA",
        zipCode : "4356"
    }

}