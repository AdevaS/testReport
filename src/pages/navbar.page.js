class NavbarPage {

  get navBar ()      { return $('#app > div > nav'); }
  get profileLink () { return $('#bs-example-navbar-collapse-1 > ul:nth-child(1) > li:nth-child(1) > a'); }
  get usersLink ()   { return $('#bs-example-navbar-collapse-1 > ul:nth-child(1) > li:nth-child(2) > a'); }
  get tasksLink ()   { return $('#bs-example-navbar-collapse-1 > ul:nth-child(1) > li:nth-child(3) > a'); }
  get signOutLink () { return $('#bs-example-navbar-collapse-1 > ul.nav.navbar-nav.pull-right > li > a'); }
}

export default new NavbarPage();
