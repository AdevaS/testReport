Feature: Testing the PROFILE PAGE for the Time Management System

Scenario: updating a user profile through the profile page
  Given I am logged as the first profile tester user
  And   I am at the profile page
  Then  I change the user profile information
  When  I click on the profile save button

Scenario: check if the user was correct updated
  Given I am at the profile page
  Then  I check the user profile information
  And   I change the profile back to its original state
