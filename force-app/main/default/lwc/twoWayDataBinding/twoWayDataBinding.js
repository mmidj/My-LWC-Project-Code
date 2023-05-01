import { LightningElement } from 'lwc';

export default class TwoWayDataBinding extends LightningElement {

    studentName = "Tim Cook";  //No need to use - var, let, const in local property

    stName = "Jimmy Butler";
    title = "Salesforce Developer";
    
    getName() {  // This is a sample method and it does not get any parameter and it returns a value.
       this.studentName = "Local Property";
         let stdName = "Alex Ferguson";
         return stdName; 
    }

    
    getFullName(firstName, lastName) { //This method get two parameters and return a value.
        let fullName = firstName + " " + lastName;
        this.studentName = fullName;
        return fullName;
    }

    changeHandler(event){   //Event Handler method to make the two-way data binding.
        this.title = event.target.value;
    }





}