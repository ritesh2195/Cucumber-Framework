$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("omayologin.feature");
formatter.feature({
  "line": 1,
  "name": "Login to the omayo application",
  "description": "",
  "id": "login-to-the-omayo-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should only be able to login with valid credentials",
  "description": "",
  "id": "login-to-the-omayo-application;user-should-only-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@All"
    },
    {
      "line": 3,
      "name": "@login"
    },
    {
      "line": 3,
      "name": "@omayo"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I navigate to omayo website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter Username as \"\u003cusername\u003e\" and Password as \"\u003cpassword\u003e\" into the fields",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should login based on expected \"\u003cloginstatus\u003e\" status",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "login-to-the-omayo-application;user-should-only-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "loginstatus"
      ],
      "line": 11,
      "id": "login-to-the-omayo-application;user-should-only-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "ritesh",
        "jdbunsnj",
        "failure"
      ],
      "line": 12,
      "id": "login-to-the-omayo-application;user-should-only-be-able-to-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "SeleniumByArun",
        "Test143$",
        "success"
      ],
      "line": 13,
      "id": "login-to-the-omayo-application;user-should-only-be-able-to-login-with-valid-credentials;;3"
    },
    {
      "cells": [
        "motoori",
        "pswd2",
        "failure"
      ],
      "line": 14,
      "id": "login-to-the-omayo-application;user-should-only-be-able-to-login-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10483070399,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should only be able to login with valid credentials",
  "description": "",
  "id": "login-to-the-omayo-application;user-should-only-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    },
    {
      "line": 3,
      "name": "@omayo"
    },
    {
      "line": 3,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I navigate to omayo website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter Username as \"ritesh\" and Password as \"jdbunsnj\" into the fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should login based on expected \"failure\" status",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "omayologin.I_navigate_to_omayo_website()"
});
formatter.result({
  "duration": 5205024099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ritesh",
      "offset": 21
    },
    {
      "val": "jdbunsnj",
      "offset": 46
    }
  ],
  "location": "omayologin.I_enter_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 487270000,
  "status": "passed"
});
formatter.match({
  "location": "omayologin.i_click_on_Login_button()"
});
formatter.result({
  "duration": 5092323900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "failure",
      "offset": 37
    }
  ],
  "location": "omayologin.User_should_login_based_on_expected_status(String)"
});
formatter.result({
  "duration": 19640801,
  "status": "passed"
});
formatter.after({
  "duration": 771472500,
  "status": "passed"
});
formatter.before({
  "duration": 9775057800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should only be able to login with valid credentials",
  "description": "",
  "id": "login-to-the-omayo-application;user-should-only-be-able-to-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    },
    {
      "line": 3,
      "name": "@omayo"
    },
    {
      "line": 3,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I navigate to omayo website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter Username as \"SeleniumByArun\" and Password as \"Test143$\" into the fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should login based on expected \"success\" status",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "omayologin.I_navigate_to_omayo_website()"
});
formatter.result({
  "duration": 4885498700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SeleniumByArun",
      "offset": 21
    },
    {
      "val": "Test143$",
      "offset": 54
    }
  ],
  "location": "omayologin.I_enter_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 602775500,
  "status": "passed"
});
formatter.match({
  "location": "omayologin.i_click_on_Login_button()"
});
formatter.result({
  "duration": 5145241401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 37
    }
  ],
  "location": "omayologin.User_should_login_based_on_expected_status(String)"
});
formatter.result({
  "duration": 250347901,
  "status": "passed"
});
formatter.after({
  "duration": 762825799,
  "status": "passed"
});
formatter.before({
  "duration": 10284239000,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should only be able to login with valid credentials",
  "description": "",
  "id": "login-to-the-omayo-application;user-should-only-be-able-to-login-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    },
    {
      "line": 3,
      "name": "@omayo"
    },
    {
      "line": 3,
      "name": "@All"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I navigate to omayo website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter Username as \"motoori\" and Password as \"pswd2\" into the fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should login based on expected \"failure\" status",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "omayologin.I_navigate_to_omayo_website()"
});
formatter.result({
  "duration": 4529165500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "motoori",
      "offset": 21
    },
    {
      "val": "pswd2",
      "offset": 47
    }
  ],
  "location": "omayologin.I_enter_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 420289001,
  "status": "passed"
});
formatter.match({
  "location": "omayologin.i_click_on_Login_button()"
});
formatter.result({
  "duration": 5184921200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "failure",
      "offset": 37
    }
  ],
  "location": "omayologin.User_should_login_based_on_expected_status(String)"
});
formatter.result({
  "duration": 14452399,
  "status": "passed"
});
formatter.after({
  "duration": 753672299,
  "status": "passed"
});
});