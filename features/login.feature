Feature: Testing the LOGIN PAGE for the Time Management System

  Scenario: log in with fake credentials
    Given I open the home page url "http://vcosta.com.br:8001"
    And   I am at the sign in page
    And   I clear the username input field
    When  I add "foo" to the username input field
    And   I clear the password input field
    And   I add "bar" to the password input field
    And   I click on the sign in button
    Then  I expect the error message "Oops! Could not authenticate user"

  Scenario: log in with incomplete information
    Given I open the home page url "http://vcosta.com.br:8001"
    And   I am at the sign in page
    And   I clear the username input field
    And   I click on the sign in button
    Then  I expect the error message "Oops! Could not authenticate user"
    When  I add "admin" to the username input field
    And   I clear the password input field
    And   I click on the sign in button
    Then  I expect the error message "Oops! Could not authenticate user"
    And   I add "123456" to the password input field
    And   I clear the username input field
    And   I click on the sign in button
    Then  I expect the error message "Oops! Could not authenticate user"

  Scenario: the navbar cannot appear on the login page
    Given I open the home page url "http://vcosta.com.br:8001"
    And   I am at the sign in page
    Then  The navbar cannot be visible
