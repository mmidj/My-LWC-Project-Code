import { LightningElement, api } from 'lwc';

export default class P2cDisplayRecords extends LightningElement {
   @api records;
   @api fields;
}