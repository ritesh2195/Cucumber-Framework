 package stepDefinitions;

	import cucumber.api.java.en.And;
	import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
	
	public class SoftwareTester {
		
		@Given("^I am a \"([a-zA-Z]{1,})\" software tester$")
		public void i_am_a_good_software_tester(String testerTypes) {	
		
		System.out.println(">>Given - I am a "+testerTypes+ "  software tester  ");
	
	}
	 
		@When("^I go to work$")
		public void i_go_to_work() {
			
		System.out.println(">>When - I go to work ");	
			
		}
		
		@And("^I \"([a-zA-Z]{1,})\" with it$")
		public void i_involve_with_it(String workType) {
			
		System.out.println(">>And - I "+workType +"  with it ");	
			
		}
		
		@Then("^My boss \"([a-zA-Z]{1,})\" me$")
		public void my_boss_loves_me(String  bossReaction) {
			
		System.out.println(">>Then - My boss "+bossReaction+ " me");	
			
		}
				
}