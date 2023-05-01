public with sharing class ApexLwcContactController {
    /*
    Use-Case: get all the contacts whose mobile and email populated. 
    Get them ordered by last name and get top 10. Display the records into a datatable.
    Fields: First name, Last name, Title, Email, mobile.
    */

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
        return [SELECT FirstName, LastName, Title, Email, MobilePhone
                FROM Contact
                WHERE (MobilePhone !=NULL AND Email !=NULL)
                ORDER BY LastName ASC
                LIMIT 10];
    }

    /*Use-Case: get all the contacts after you put a serach key of first name or last name 
    of the contact in the search bar(search input) and display the following fields in a data table
    fields: First name, Last name, email, title, Phone
    methodname: searchcontacts
    LWC Name: apexLwcSearchContacts
    parameter name: searchKey
    */
    @AuraEnabled
    public static List<Contact> searchcontacts(String searchKey){
        searchKey = '%' + searchKey + '%';
        return [SELECT Id, FirstName, LastName,Email, Title, Phone
                FROM Contact
                WHERE FirstName LIKE :searchKey OR LastName LIKE :searchKey
                LIMIT 10];
    }

}