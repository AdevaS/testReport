import { Given, When, Then } from 'cucumber';
import { expect } from 'chai';
import SignUpPage from '../pages/signup.page';
import LoginPage from '../pages/login.page';
import NavbarPage from '../pages/navbar.page';
import Generators from '../utilities/generators';

var password = Generators.getRandomString();

When(/^I click on the sign up button$/, () => {
  LoginPage.signUpButton.click();
});

Then(/^I am at the sign up page$/, () => {
  SignUpPage.signUpForm.waitForExist(5000);
  expect(SignUpPage.signUpForm.getText()).to.contain('Sign up form');
});

Then(/^I clear the sign up full name input field$/, () => {
  SignUpPage.fullNameInputField.clearElement();
});

Then(/^I add a random string to the sign up full name input field$/, () => {
  SignUpPage.fullNameInputField.setValue(Generators.getRandomStringChain());
});

Then(/^I clear the sign up working hours input field$/, () => {
  SignUpPage.workingHoursInputField.clearElement();
});

Then(/^I add a random number to the sign up working hours input field$/, () => {
  SignUpPage.workingHoursInputField.setValue(Generators.getRandomNumberBetween(1,12));
});

Then(/^I clear the sign up username input field$/, () => {
  SignUpPage.usernameInputField.clearElement();
});

Then(/^I add a random string to the sign up username input field$/, () => {
  SignUpPage.usernameInputField.setValue(Generators.getRandomString());
});

Then(/^I clear the sign up password input field$/, () => {
  SignUpPage.passwordInputField.clearElement();
});

Then(/^I add a random string to the sign up password input field$/, () => {
  SignUpPage.passwordInputField.setValue(password);
});

Then(/^I clear the sign up password confirmation input field$/, () => {
  SignUpPage.confirmPasswordInputField.clearElement();
});

Then(/^I add the generated password number to the sign up password confirmation input field$/, () => {
  SignUpPage.confirmPasswordInputField.setValue(password);
});

When(/^I click on the sign up save button$/, () => {
  SignUpPage.saveButton.click();
});

Then(/^I am redirected to the tasks page$/, () => {
  NavbarPage.signOutLink.waitForExist(5000);
  expect(NavbarPage.signOutLink.getText()).to.contain('Sign Out');
});
