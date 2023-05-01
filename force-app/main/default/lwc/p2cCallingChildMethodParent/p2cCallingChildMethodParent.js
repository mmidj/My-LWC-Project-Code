import { LightningElement } from 'lwc';

export default class P2cCallingChildMethodParent extends LightningElement {
    handlerSlider(){
        this.template.querySelector('c-p2c-calling-child-method-child').resetSlider();
    }
}