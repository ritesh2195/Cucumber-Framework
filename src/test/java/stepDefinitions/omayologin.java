  package stepDefinitions;

	import java.io.File;
	import java.io.IOException;
	import java.util.Date;
	import java.util.concurrent.TimeUnit;

	import org.apache.commons.io.FileUtils;
	import org.junit.Assert;
	import org.openqa.selenium.Alert;
	import org.openqa.selenium.By;
	import org.openqa.selenium.OutputType;
	import org.openqa.selenium.TakesScreenshot;
	import org.openqa.selenium.WebDriver;
	import org.openqa.selenium.chrome.ChromeDriver;

	import cucumber.api.Scenario;
	import cucumber.api.java.After;
	import cucumber.api.java.Before;
	import cucumber.api.java.en.And;
	import cucumber.api.java.en.Given;
	import cucumber.api.java.en.Then;
	import cucumber.api.java.en.When;
	
	public class omayologin {
		
		WebDriver driver;
		
		@Before("@login")
		public void setup() {
			
		System.setProperty("webdriver.chrome.driver", "drivers//chromedriver.exe");
			
		driver=new ChromeDriver();
			
		driver.manage().window().maximize();	
			
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		
		}
		
		@Given("^I navigate to omayo website$")
		public void I_navigate_to_omayo_website() {
		
		driver.get("http://omayo.blogspot.com/");
		
		}
		
		@When("^I enter Username as \"([^\"]*)\" and Password as \"([^\"]*)\" into the fields$")
		public void I_enter_Username_and_Password(String username, String password){
			
		driver.findElement(By.name("userid")).sendKeys(username);
		
		driver.findElement(By.name("pswrd")).sendKeys(password);
			
		}
		
		@And("^I click on Login button$")
		public void i_click_on_Login_button() throws InterruptedException  {
		
		driver.findElement(By.cssSelector("*[value^='Login']")).click();
		
		Thread.sleep(5000);
		
		}
		
		@Then("^User should login based on expected \"([^\"]*)\" status$")
		public void User_should_login_based_on_expected_status(String expectedStatus){
			
		String expectedLoginStatus=expectedStatus;
		
		String actualLoginStatus=null;
			
		try {
			
		Alert alt=driver.switchTo().alert();
		
		String txt=alt.getText();
		
		if(txt.equals("Error Password or Username")) {
			
			actualLoginStatus="failure";
			
		}
		
		}catch(Exception e) {
			
			actualLoginStatus="success";
			
		}
		
		if(actualLoginStatus.equals(expectedLoginStatus)) {
			
			
			
		}else {
			
		Assert.fail("OmayoLogin test has failed");
		
		}
		
			
		}
		
		@After("@login")
		public void closer(Scenario scenario) {
				
		driver.quit();
			
		}
		
	
	}
