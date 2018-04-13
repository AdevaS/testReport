import Page from './page';

class LoginPage extends Page {

  get usernameInputField () { return $('#app > div > div > div.panel.panel-default.col-lg-6 > div.panel-body > form > div:nth-child(1) > input'); }
  get passwordInputField () { return $('#app > div > div > div.panel.panel-default.col-lg-6 > div.panel-body > form > div:nth-child(2) > input'); }
  get signInButton ()       { return $('#app > div > div > div.panel.panel-default.col-lg-6 > div.panel-body > form > div:nth-child(3) > button'); }
  get signInForm ()         { return $('#app > div > div > div.panel.panel-default.col-lg-6'); }
  get returnMessage ()      { return $('#app > div > div.alert.alert-danger'); }
  get signUpButton ()       { return $('#app > div > div > div.panel.panel-default.col-lg-6 > div.panel-body > form > div:nth-child(6) > a'); }

  open() {
    super.open('/');
  }

  loginWith(username, password) {
    browser.url('http://vcosta.com.br:8001');
    var inputLocator = '#app > div > div > div.panel.panel-default.col-lg-6 > div.panel-body > form > div:nth-child(1) > input';
    var passwordLocator = '#app > div > div > div.panel.panel-default.col-lg-6 > div.panel-body > form > div:nth-child(2) > input';
    browser.pause(3000);
    if (username === 'admin') {
      browser.setValue(inputLocator, 'admin');
      browser.setValue(passwordLocator, '123456');
    } else if (username === 'manager') {
      browser.setValue(inputLocator, 'manager');
      browser.setValue(passwordLocator, '123456');
    } else if (username === 'user') {
      browser.setValue(inputLocator, 'user');
      browser.setValue(passwordLocator, '123456');
    } else {
      browser.setValue(inputLocator, username);
      browser.setValue(passwordLocator, password);
    }
    browser.click('#app > div > div > div.panel.panel-default.col-lg-6 > div.panel-body > form > div:nth-child(3) > button');
    browser.pause(5000);
  }

}

export default new LoginPage();
