import { LightningElement } from 'lwc';

export default class C2pSimpleEventChild extends LightningElement {
    closeHandler(){
        const closeEvent = new CustomEvent('close',{
                bubbles :true,
                detail:"Modal has been closed successfully!!! This message is seen because the child component is sending an event with data."});
        this.dispatchEvent(closeEvent);
    }

    footerHandler(){
        console.log("Footer Handler is called through event bubbling!!");
    }
    sectionHandler(){
        console.log("Section Handler is called through event bubbling!!");
    }
}