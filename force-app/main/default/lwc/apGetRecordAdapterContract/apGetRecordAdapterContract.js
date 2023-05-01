import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire } from 'lwc';

export default class ApGetRecordAdapterContract extends LightningElement {

    /*
    Use-Case:Create an LWC component and display the Contract records by using getRecord Adapter Full or Compact page Layout. 
    */

    recordId='8008Y000002uthlQAA';
    accName;
    accId;
    ContractNumber;
    ContractTerm;
    EndDate;
    StartDate;
    Status;
    
    @wire(getRecord,{recordId:'$recordId', layoutTypes:['Compact'], modes:['View']})
    contractInfo({data,error}){
        if(data){
            console.log(data);
            const fieldsMap = data.fields;
            this.accName = fieldsMap['Account'].displayValue;
            this.accId = fieldsMap['AccountId'].value;
            this.ContractNumber = fieldsMap['ContractNumber'].value;
            this.ContractTerm = fieldsMap['ContractTerm'].value;
            this.EndDate = fieldsMap['EndDate'].displayValue;
            this.StartDate = fieldsMap['StartDate'].displayValue;
            this.Status = fieldsMap['Status'].displayValue;
        }
        if(error){
            console.log(error);
        }
    }
}