Feature: Testing the SIGN UP PAGE for the Time Management System

  Scenario: sign up with all required fields randomly generated
    Given I open the home page url "http://vcosta.com.br:8001"
    When  I click on the sign up button
    And   I am at the sign up page
    And   I clear the sign up full name input field
    And   I add a random string to the sign up full name input field
    And   I clear the sign up working hours input field
    And   I add a random number to the sign up working hours input field
    And   I clear the sign up username input field
    And   I add a random string to the sign up username input field
    And   I clear the sign up password input field
    And   I add a random string to the sign up password input field
    And   I clear the sign up password confirmation input field
    And   I add the generated password number to the sign up password confirmation input field
    When  I click on the sign up save button
    Then  I am redirected to the tasks page

    # Examples:
    # | full name | working hours | username | password | confirmation |
