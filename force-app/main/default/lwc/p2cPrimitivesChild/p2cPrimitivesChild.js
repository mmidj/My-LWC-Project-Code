import { LightningElement, api } from 'lwc';

export default class P2cPrimitivesChild extends LightningElement {
    @api fullname;
    @api age;
    @api title;
}