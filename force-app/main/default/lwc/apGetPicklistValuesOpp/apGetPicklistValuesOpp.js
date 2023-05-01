import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';

import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import STAGE_NAME_FIELD from '@salesforce/schema/Opportunity.StageName';
export default class ApGetPicklistValuesOpp extends LightningElement {


    /* Create 2 record types on opportunity object.
    1. Home Appliances
    2. Kitchen Appliances
    Get the record type id of “Home Appliances” and display on html. And 
    Get the record type id of “Kitchen Appliances”. 
    Using that get the picklist values available for Stage Name on Opportunity
    Object. Display them in a combobox. 
    PS: Create a Sales Process before creating a Record Types.
    */

    rtIdHomeApp;
    rtIdKitchenApp;
    stageOptions;
    stageValue;
    @wire(getObjectInfo,{objectApiName:OPPORTUNITY_OBJECT})
    oppsInfo({data,error}){
        if(data){
            console.log(data);
            const rtIdsMap = data.recordTypeInfos;
            this.rtIdHomeApp = Object.keys(rtIdsMap).find(w=>rtIdsMap[w].name==='Home Appliances');
            this. rtIdKitchenApp = Object.keys(rtIdsMap).find(w=>rtIdsMap[w].name==='Kitchen Appliances');
        }
        if(error){
            console.log(error);
        }
    }

    @wire(getPicklistValues,{fieldApiName:STAGE_NAME_FIELD , recordTypeId:'$rtIdKitchenApp'})
    oppsPickList({data,error}){
        if(data){
            console.log(data);
            this.stageOptions = this.picklistGenerator(data);
        }
        if(error){
            console.log(error);
        }
    }

    picklistGenerator(data){
        return data.values.map(w=>({
           label : w.label,
           value :w.value
        }));
    }

    handleChange(event){
        this.stageValue = event.target.value;
    }
}