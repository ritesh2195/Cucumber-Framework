 package runner;

	import java.util.Date;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;

//import org.junit.AfterClass;
//import org.junit.BeforeClass;
//import org.junit.runner.RunWith;

import com.vimalselvam.cucumber.listener.ExtentProperties;
import com.vimalselvam.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
//import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;
	
	
	@CucumberOptions(
			plugin= {"pretty",
                    "html:out/cucumber-html-report","json:out/cucumber-report.json",
                    "usage:target/cucumber-usage.json",
                    "junit:target/cucumber-results.xml",
                    "com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:"},
			
			features= {"features"},
			
			glue= {"stepDefinitions"},
			
			tags= {"@login"}
			
			)
	public class Runner extends AbstractTestNGCucumberTests {
		
		 @BeforeClass
	       public static void setup() {
	           //Date date = new Date();
	           String fileName    = "reports//report.html";
	          // fileName           = fileName+date.toString()
	              //                        .replace("-","_")
	                     //                 .replace(":","_")
	                              //        + ".html";
	           ExtentProperties extentProperties = ExtentProperties.INSTANCE;
	           extentProperties.setReportPath(fileName);
	       }

	        @AfterClass
	        public static void teardown() {
	            Reporter.setSystemInfo("user", System.getProperty("user.name"));
	            Reporter.setTestRunnerOutput("Sample test runner output message");
	        }
		
	}
