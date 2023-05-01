import { LightningElement, api } from 'lwc';

export default class P2cCallingChildMethodChild extends LightningElement {
    val = 30;

    @api resetSlider(){
        this.val = 0;
    }
}