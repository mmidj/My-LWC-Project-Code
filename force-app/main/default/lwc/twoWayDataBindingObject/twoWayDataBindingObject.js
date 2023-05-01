import { LightningElement, track } from 'lwc';

export default class TwoWayDataBindingObject extends LightningElement {
    studentName = "Alex Ferguson";
    
     @track contact = {
        stName : "Tim Cook",
        country : "United States",
        company : "Apple"
    }

    changeHandler (event){
         this.contact.country = event.target.value;
    }

    changeHandlerName(event){
         this.contact.stName = event.target.value;
    }
}