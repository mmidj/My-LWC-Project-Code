import { LightningElement } from 'lwc';
import searchAccount from '@salesforce/apex/ApexLwcAccountController.searchAccount';

export default class ApexLwcSearchAccounts extends LightningElement {
    searchWord;
    accounts;
    error;
    
    searchHandler(event){
        this.searchWord = event.target.value;
        
        if(this.searchWord.length>1){
            searchAccount({searchKey:this.searchWord})
            .then(result=>{
                console.log(result);
                this.accounts = result;
            })
            .catch(error=>{
                console.log(error);
                this.error = error;
            })
        } else  {
            this.accounts = undefined;
            this.error = undefined;
        }
    }
}