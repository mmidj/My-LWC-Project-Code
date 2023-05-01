import { LightningElement } from 'lwc';
import searchcontacts from '@salesforce/apex/ApexLwcContactController.searchcontacts';

const COLUMNS = [
    { label: 'First Name', fieldName: 'FirstName', type:'text'},
    { label: 'Last Name', fieldName: 'LastName', type: 'text' },
    { label: 'Email', fieldName: 'Email', type: 'email' },
    { label: 'Title', fieldName: 'Title', type: 'text' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
];

export default class ApexLwcSearchContacts extends LightningElement {
    columns =COLUMNS;
    contactValue;
    contacts;
    error;
    searchContactsHandler(event){
        this.contactValue = event.target.value;
        searchcontacts({searchKey: this.contactValue})
            .then(result=>{
                console.log(result);
                this.contacts = result;
            })
            .catch(error=>{
                console.log(error);
                this.error = error;
            })
    }
}