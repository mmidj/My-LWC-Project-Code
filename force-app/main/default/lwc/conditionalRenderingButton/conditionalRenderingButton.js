import { LightningElement } from 'lwc';

export default class ConditionalRenderingButton extends LightningElement {
    getInfo =false;
    handleClick(){
        this.getInfo = true;
    }

    handleClickHide() {
        this.getInfo = false;
    }
}