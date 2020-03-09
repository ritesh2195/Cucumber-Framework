Feature: login test

This feature file will contain all the scenario related login functionality of the application

@ninja
Scenario: Login with valid credentials
This test verify whether the user is able to login with valid credential
	Given User naviagte to the login page of the application
	When User enters the Username riteshranjanmishra938@gmail.com and Password mishra21 into the fields
	And Clicks on Login button
	Then User should successfully login	
