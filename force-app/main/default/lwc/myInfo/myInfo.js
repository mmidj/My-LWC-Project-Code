import { LightningElement } from 'lwc';

export default class MyInfo extends LightningElement {
    usName;
    role;

    get roles() {
        return [
            { label: 'Salesforce Admin', value: 'Salesforce Admin' },
            { label: 'Salesforce Developer', value: 'Salesforce Developer' },
            { label: 'Salesforce Architect', value: 'Salesforce Architect' },
        ];
    }

    changeHandler(event){
        this.usName = event.target.value;
    }
    handleChangeRole(event){
        this.role = event.target.value;
    }
}