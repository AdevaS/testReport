import Page from './page';

class TasksPage extends Page {

  get myTasksPanel ()             { return $('#app > div > div > div:nth-child(3)'); }
  get whenDateField ()            { return $('#app > div > div > div:nth-child(1) > div.panel-body > form > div:nth-child(1) > div:nth-child(2) > div > input'); }
  get whenTimeSpentInputField ()  { return $('#app > div > div > div:nth-child(1) > div.panel-body > form > div:nth-child(1) > div:nth-child(3) > div > input'); }
  get notesTextAreaField ()       { return $('#app > div > div > div:nth-child(1) > div.panel-body > form > div:nth-child(2) > div > div > textarea'); }
  get saveTaskButton ()           { return $('#app > div > div > div:nth-child(1) > div.panel-body > form > div:nth-child(3) > div > button'); }
  get fromFilterDateField ()      { return $('#app > div > div > div:nth-child(3) > div.panel-body > div > form > div:nth-child(1) > input'); }
  get toFilterDateField ()        { return $('#app > div > div > div:nth-child(3) > div.panel-body > div > form > div:nth-child(2) > input'); }
  get filterTaskButton ()         { return $('//*[@id="app"]/div/div/div[2]/div[2]/div/form/button[1]'); }
  get exportTasksButton ()        { return $('//*[@id="app"]/div/div/div[2]/div[2]/div/form/button[2]'); }
  get myTasksTableRows ()         { return $$('#app > div > div > div:nth-child(3) > div.panel-body > div > table > tbody > tr'); }
  get taskOnFirstRow ()           { return $('//*[@id="app"]/div/div/div[2]/div[2]/div/table/tbody/tr[1]'); }
  get firstRowEditTaskButton ()   { return $('//*[@id="app"]/div/div/div[2]/div[2]/div/table/tbody/tr[1]/td[4]/a[1]'); }
  get firstRowDeleteTaskButton () { return $('//*[@id="app"]/div/div/div[2]/div[2]/div/table/tbody/tr[1]/td[4]/a[2]'); }

}

export default new TasksPage();
