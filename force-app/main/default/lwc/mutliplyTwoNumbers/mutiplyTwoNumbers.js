import { LightningElement } from 'lwc';

export default class MutiplyTwoNumbers extends LightningElement {
    num1 = "";
    num2 = "";
    
    handlerNum1(event){
        this.num1 = event.target.value;
    }

    handlerNum2(event){
       this.num2 = event.target.value;
    }

     get product(){
        let prd = this.num1 * this.num2
        return prd;
    }

}