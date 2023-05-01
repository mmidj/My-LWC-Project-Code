import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';

import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import TYPE_FIELD from '@salesforce/schema/Opportunity.Type';
import STAGE_NAME_FIELD from '@salesforce/schema/Opportunity.StageName';

export default class ApGetPicklistValuesOpportunity extends LightningElement {

    refinedOilRtId;
    optionsType;
    optionsStage;
    oppName;
    stageValue;
    typeValue;
    
    @wire(getObjectInfo, {objectApiName:OPPORTUNITY_OBJECT})
    oppInfo({data,error}){
        if(data){
            console.log(data);
            const rtIdsMap = data.recordTypeInfos;
            this.refinedOilRtId = Object.keys(rtIdsMap).find(w =>rtIdsMap[w].name ==='Refined Oil');
        }
        if(error){
            console.log(error);
        }
    }

    @wire(getPicklistValues,{fieldApiName: TYPE_FIELD, recordTypeId: '$refinedOilRtId'})
    oppTypePickList({data,error}){
        if(data){
            console.log(data);
            this.optionsType = this.pickListGeneratorType(data);
        }
        if(error){
            console.log(error);
        }
    }

    pickListGeneratorType(data){
        return data.values.map(w =>({
            label : w.label,
            value : w.value
        }));
    }

    @wire(getPicklistValues,{fieldApiName: STAGE_NAME_FIELD, recordTypeId: '$refinedOilRtId'})
    oppStagePickList({data,error}){
        if(data){
            console.log(data);
            this.optionsStage = this.pickListGeneratorStage(data);
        }
        if(error){
            console.log(error);
        }
    }

    pickListGeneratorStage(data){
        return data.values.map(w =>({
            label : w.label,
            value : w.value
        }));
    }

    changeHandlerName(event){
        this.oppName = event.target.value;
    }
    handleChangeType(event){
        this.typeValue = event.target.value;
    }
    handleChangeStage(event){
        this.stageValue = event.target.value
    }
}