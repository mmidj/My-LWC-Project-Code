import { LightningElement } from 'lwc';

export default class TemplateLoopingObject extends LightningElement {

    accounts = [
        {
            id : 1,
            name : "TechPro Education",
            type : "Information Technology",
            location : "New Jersey"
        },

        { 
            id : 2,
            name : "Coca Cola",
            type : "Food and Beverage",
            location : "New York"
        },

        { 
            id : 3,
            name : "Facebook",
            type : "Social Media",
            location : "Houston"
        },
        { 
            id : 4,
            name : "NASA",
            type : "Space Exploration",
            location : "Florida"
        }
    ];


}