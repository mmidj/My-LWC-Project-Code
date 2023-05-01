public with sharing class ApexLwcAccountController {
    

 //Create an LWC Component and display the top 10 accounts based on their Annual Revenue by using Apex in LWC. Please display the following fields. Name, Type, Industry, Annual Revenue

  @AuraEnabled(cacheable=true)
  public static List<Account> getAccounts(){
    return [SELECT Id, Name, Type, Industry, AnnualRevenue
            FROM Account
            WHERE AnnualRevenue != NULL
            ORDER BY AnnualRevenue DESC
            LIMIT 10];
  }

  //Use-Case: Get all the Accounts where their Type is a given type like Prospect, Customer-Direct or Customer-channel…etc
  @auraEnabled(cacheable=true)
  public static List<Account> getAccountsByType(String type){
    return [SELECT Name, Type, Industry, AnnualRevenue
            FROM Account
            WHERE Type LIKE :type
            WITH SECURITY_ENFORCED];// It will show the fields based on the field level permisison per user.
  }

  //Use-Case: Imperative approach: Get all the accounts whose name contains the given searchkey.
  @AuraEnabled
  public static List<Account> searchAccount(String searchKey){
    searchKey = '%'+ searchKey + '%';
    return [SELECT Id, Name, Type, AnnualRevenue, AccountNumber
            FROM Account
            WHERE Name LIKE :searchKey
            WITH SECURITY_ENFORCED];

  }

  //Get the most recent Accounts
  @AuraEnabled(cacheable=true)
  public static List<Account> getRecentaccounts(){
    return [SELECT Id,Name,Type,Industry,AnnualRevenue
            FROM Account
            ORDER BY CreatedDate DESC
            LIMIT 5];
  }
   
}