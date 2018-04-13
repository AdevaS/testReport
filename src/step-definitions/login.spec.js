import { Given, When, Then } from 'cucumber';
import { expect } from 'chai';
import LoginPage from '../pages/login.page';
import NavbarPage from '../pages/navbar.page';

Given(/^I open the home page url "([^"]*)?"$/, (url) => {
  LoginPage.open(url);
  LoginPage.signInForm.waitForExist(5000);
});

Given(/^I am at the sign in page$/, () => {
  expect(LoginPage.signInForm.getText()).to.contain('Please sign in');
});

When(/^I clear the username input field$/, () => {
  LoginPage.usernameInputField.clearElement();
});

When(/^I add "([^"]*)?" to the username input field$/, (username) => {
  LoginPage.usernameInputField.setValue(username);
});

When(/^I clear the password input field$/, () => {
  LoginPage.passwordInputField.clearElement();
});

When(/^I add "([^"]*)?" to the password input field$/, (password) => {
  LoginPage.passwordInputField.setValue(password);
});

When(/^I click on the sign in button$/, () => {
  if (browser.isVisible('#app > div > div.alert.alert-danger')) {
    browser.pause(6000);
    LoginPage.signInButton.click();
  } else {
    LoginPage.signInButton.click();
  }
});

Then(/^I expect the error message "([^"]*)?"$/, (message) => {
  LoginPage.returnMessage.waitForExist(2000);
  expect(LoginPage.returnMessage.getText()).to.contain(message);
});

Then(/^The navbar cannot be visible$/, () => {
  expect(NavbarPage.navBar).to.not.exist;
});
