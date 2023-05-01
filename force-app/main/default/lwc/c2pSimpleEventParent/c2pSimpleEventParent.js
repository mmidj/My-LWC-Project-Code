import { LightningElement } from 'lwc';

export default class C2pSimpleEventParent extends LightningElement {
    showModal = false;
    message;
    clickHandler(){
        this.showModal = true;
    }

    closeModalHandler(event){
        this.showModal = false;
        this.message = event.detail;
    }
}