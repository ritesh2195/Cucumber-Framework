Feature: Login to the omayo application

@All @login @omayo
Scenario Outline: User should only be able to login with valid credentials
Given I navigate to omayo website
When I enter Username as "<username>" and Password as "<password>" into the fields
And I click on Login button
Then User should login based on expected "<loginstatus>" status

Examples: 
|username				|password|loginstatus|
|ritesh  				|jdbunsnj|failure    |
|SeleniumByArun |Test143$|success    |
|motoori				|pswd2		|failure 	 |