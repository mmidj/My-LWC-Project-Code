import { LightningElement } from 'lwc';

export default class Sum extends LightningElement {
    num1;
    num2;
    total;

    changeHandler(event){
         var comp = event.target.name;
         if(comp === "input1"){
            this.num1 = event.target.value;
         }else{
            this.num2 = event.target.value;
         }
         this.total = Number(this.num1) +Number(this.num2);
    }
}