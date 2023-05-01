import { LightningElement } from 'lwc';
import searchcontacts from '@salesforce/apex/ApexLwcContactController.searchcontacts';

const COLUMNS = [
    { label: 'First Name', fieldName: 'FirstName' },
    { label: 'Last Name', fieldName: 'LastName' },
    { label: 'Email', fieldName: 'Email', type: 'email' },
    { label: 'Title', fieldName: 'Title' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' }
];

export default class P2cParentActionParent extends LightningElement {

    contacts;
    errorMsg;
    columns = COLUMNS;

    changeHandler(event){
        const searchWord = event.target.value;
        searchcontacts({searchKey:searchWord})
            .then(result =>{
                console.log(result);
                this.contacts = result;
            })
            .catch(error =>{
                console.log(error);
                this.errorMsg = error;
            })
    }
}