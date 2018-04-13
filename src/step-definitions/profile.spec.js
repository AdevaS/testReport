import { Given, When, Then } from 'cucumber';
import { expect } from 'chai';
import ProfilePage from '../pages/profile.page';
import LoginPage from '../pages/login.page';
import NavbarPage from '../pages/navbar.page';

Given(/^I am logged as the first profile tester user$/, () => {
  LoginPage.loginWith('profile1', '123456');
});

Then(/^I am at the profile page$/, () => {
  NavbarPage.profileLink.click();
  expect(ProfilePage.profileForm.getText()).to.contain('Update your information');
});

When(/^I change the user profile information$/, () => {
  ProfilePage.fullNameInputField.setValue('Profile Tester 02');
  ProfilePage.workingHoursInputField.setValue('10');
  ProfilePage.usernameInputField.setValue('profile2');
  ProfilePage.passwordInputField.setValue('654321');
  ProfilePage.passwordConfirmationInputField.setValue('654321');
  browser.pause(2000);
});

When(/^I click on the profile save button$/, () => {
  ProfilePage.saveProfileButton.click();
  browser.pause(2000);
});

Then(/^I check the user profile information$/, () => {
  expect(ProfilePage.fullNameInputField.getValue()).to.equal('Profile Tester 02');
  expect(ProfilePage.workingHoursInputField.getValue()).to.equal('10');
  expect(ProfilePage.usernameInputField.getValue()).to.equal('profile2');
});

Then(/^I change the profile back to its original state$/, () => {
  ProfilePage.fullNameInputField.setValue('Profile Tester 01');
  ProfilePage.workingHoursInputField.setValue('8');
  ProfilePage.usernameInputField.setValue('profile1');
  ProfilePage.passwordInputField.setValue('123456');
  ProfilePage.passwordConfirmationInputField.setValue('123456');
  ProfilePage.saveProfileButton.click();
  browser.pause(1000);
});
