import Page from './page';

class SignUpPage extends Page {

  get signUpForm ()                { return $('#app > div > div > div.col-lg-6 > h2'); }
  get fullNameInputField ()        { return $('#app > div > div > div.col-lg-6 > form > div:nth-child(1) > input'); }
  get workingHoursInputField ()    { return $('#app > div > div > div.col-lg-6 > form > div:nth-child(2) > input'); }
  get usernameInputField ()        { return $('#app > div > div > div.col-lg-6 > form > div:nth-child(3) > input'); }
  get passwordInputField ()        { return $('#app > div > div > div.col-lg-6 > form > div:nth-child(4) > input'); }
  get confirmPasswordInputField () { return $('#app > div > div > div.col-lg-6 > form > div:nth-child(5) > input'); }
  get saveButton ()                { return $('//*[@id="app"]/div/div/div[2]/form/div[6]/button[1]'); }
  get clearButton ()               { return $('//*[@id="app"]/div/div/div[2]/form/div[6]/button[2]'); }

}

export default new SignUpPage();
