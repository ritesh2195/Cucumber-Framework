 package stepDefinitions;

	import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
	
	public class Search {
	 
	 @Given("^I visit the website as Guest user$")
	 public void I_visit_the_website_as_Guest_user() {
		 
	 System.out.println(">> Given - I visit the website as Guest user ");
	 	 
		 
	 }
	
	 @When("^I selelect Books option from the dropdown$")
	 public void I_select_Books_option_from_the_dropdown() {
		 
	 System.out.println(">> When - I slelect the books option from the dropdown");	 
		 
	 }
	
	 @And("^I click on search icon$")
	 public void I_click_on_search_icon() {
		
	 System.out.println(">> And - I click on search icon");
		 
	 }
	 
	 @Then("^I should see the Books page loaded$")
	 public void I_should_see_the_Books_page_loaded() {
		 
	 System.out.println(">> Then - I should see the Books page loaded"); 
		  
	 }
	 
	 @And("^I should see Books at Amazon as heading$")
	 public void I_should_see_Books_at_Amazon_as_heading() {
		 
	 System.out.println(">> And - I should see Books at Amazon as heading");	 
		  
	 }
	 
	 @But("^I should not see the other category products$")
	 public void I_should_not_see_the_other_category_products() {
		 
	 System.out.println(">> But - I should not see other category products");
	 System.out.println("...................................................");
		 
	 }
	 
	 @When("^I select Baby option from the dropdown$")
	 public void I_select_Baby_option_from_the_dropdown() {
		 
	 System.out.println(">> When - I select Baby option from the dropdown");
		  
	 }
	 
	 @Then("^I should see the baby page loaded$")
	 public void I_should_see_the_baby_page_loaded() {
		 
	 System.out.println(">> Then - I should see the baby page loaded");	 
		 
	 }
	
	 @And("^I should see see the Baby store as heading$")
	 public void I_should_see_see_the_Baby_store_as_heading() {
		 
	 System.out.println(">> And - I should see see the Baby store as heading");	 
		 
	 }
	 
	 
	}
