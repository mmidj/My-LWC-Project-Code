import { LightningElement } from 'lwc';
import getOppsByType from '@salesforce/apex/ApexLwcOpportunityController.getOppsByType';

export default class ApexLwcSearchOppsByType extends LightningElement {

    selectedValue;
    opps;
    error;
    handleChange(event){
        this.selectedValue = event.target.value;
        getOppsByType({type:this.selectedValue})
            .then(result=>{
                console.log(result);
                this.opps = result;
            })
            .catch(error=>{
                console.log(error);
                this.error = error;
            })
    }

    get typeOptions(){
        return [
            {label: "Existing Customer - Upgrade", value:"Existing Customer - Upgrade"},
            {label: "Existing Customer - Replacement", value:"Existing Customer - Replacement"},
            {label: "Existing Customer - Downgrade", value:"Existing Customer - Downgrade"},
            {label: "New Customer", value:"New Customer"}
        ];
    }
}