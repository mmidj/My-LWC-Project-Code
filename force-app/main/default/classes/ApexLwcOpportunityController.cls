public with sharing class ApexLwcOpportunityController {
    
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOppsByStage(String stage){
        return [SELECT Name,Type, Amount,StageName, LeadSource
        FROM Opportunity
        WHERE StageName = :stage
        ORDER BY Amount DESC];
    }

    //Use-Case Imperative Apex with Combobox: get all the opps whose type matches with the given input.
    //fields: Name, Type, Amount, StageName
    @AuraEnabled
    public static List<Opportunity> getOppsByType(String type){
        return [SELECT Id, Name, Amount, Type, StageName
                FROM Opportunity
                WHERE Type =:type
                ORDER BY Type DESC
                LIMIT 10];
    }
}