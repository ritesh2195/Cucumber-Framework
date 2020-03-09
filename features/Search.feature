Feature: Searching of various categories should be possible along with the product search

It is good to provide an option to our end users where they can search for the products
based on their category, rather than only searching a product.This will increase our 
business and make end users happy.

Background: Visiting the website as a guest user
Given I visit the website as Guest user

@All @book
Scenario: Search for the products under Books category
When I selelect Books option from the dropdown
And I click on search icon
Then I should see the Books page loaded
And I should see Books at Amazon as heading
But I should not see the other category products

@All @baby
Scenario: Search for the products under Baby category
When I select Baby option from the dropdown
And I click on search icon
Then I should see the baby page loaded
And I should see see the Baby store as heading
But I should not see the other category products