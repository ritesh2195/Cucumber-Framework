Feature: Registratio Tests

@qafox
Scenario: Register an account with valid details
	Given User navigates to Registration page
	When User provies the following details into the input fields
		|firstName|shivji									    	|
		|lastName |mishra									      |
		|email		|riteshranjanmishra@ymail.com	|
		|phone		|1234567897							  	|
		|password	|shivji2122					            |
	And Selects the privacy policy option
	And Clicks on Continue button
	Then User should get successfully registered