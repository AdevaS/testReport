Feature: Testing the TASK PAGE for the Time Management System

  Scenario: create a new task to validate the correct RED background color removing the register afterwards
    Given I am not logged
    And   I log in as the user "admin"
    And   I am on the tasks page
    When  I choose todays date in the when input field
    And   I add "7" to the time spent field
    And   I add "The color of this register should be RED" to the note text area field
    And   I click on the save task button
    Then  A new task is added to the tasks panel
    And   This task must have a background color "#f2dede"
    Given I click on the delete button
    And   I confirm the deletion on the popup
    Then  The task must be removed from the tasks panel
    Then  I click on the sign out button

  Scenario: create a new task to validate the correct GREEN background color removing the register afterwards
    Given I am not logged
    And   I log in as the user "admin"
    And   I am on the tasks page
    When  I choose todays date in the when input field
    And   I add "8" to the time spent field
    And   I add "The color of this register should be GREEN" to the note text area field
    And   I click on the save task button
    Then  A new task is added to the tasks panel
    And   This task must have a background color "#3c763d"
    Given I click on the delete button
    And   I confirm the deletion on the popup
    Then  The task must be removed from the tasks panel
    Then  I click on the sign out button

  Scenario: check the filter by date functionality
    Given I am not logged
    And   I log in as the user "user"
    And   I am on the tasks page
    When  I choose the starting filter date
    And   I choose the ending filter date
    And   I click the filter button
    Then  I expect the table to have two rows
    Then  I click on the sign out button

  Scenario: exporting tasks and checking the report
    Given I am not logged
    And   I log in as the user "user"
    And   I am on the tasks page
    When  I click the export button
    Then  All the filtered tasks will be exported
