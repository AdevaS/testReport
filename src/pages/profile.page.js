import Page from './page';

class ProfilePage extends Page {

  get profileForm ()                    { return $('#app > div > div > div.col-lg-6 > div > div.panel.panel-heading > h2'); }
  get fullNameInputField ()             { return $('#app > div > div > div.col-lg-6 > div > div.panel.panel-body > form > div:nth-child(1) > input'); }
  get workingHoursInputField ()         { return $('#app > div > div > div.col-lg-6 > div > div.panel.panel-body > form > div:nth-child(2) > input'); }
  get usernameInputField ()             { return $('#app > div > div > div.col-lg-6 > div > div.panel.panel-body > form > div:nth-child(3) > input'); }
  get passwordInputField ()             { return $('#app > div > div > div.col-lg-6 > div > div.panel.panel-body > form > div:nth-child(4) > input'); }
  get passwordConfirmationInputField () { return $('#app > div > div > div.col-lg-6 > div > div.panel.panel-body > form > div:nth-child(5) > input'); }
  get saveProfileButton ()              { return $('//*[@id="app"]/div/div/div[2]/div/div[2]/form/div[6]/button[1]'); }
  get clearProfileFormButton ()         { return $('//*[@id="app"]/div/div/div[2]/div/div[2]/form/div[6]/button[2]'); }

}

export default new ProfilePage();
