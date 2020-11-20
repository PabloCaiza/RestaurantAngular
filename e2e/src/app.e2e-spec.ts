import { AppPage } from './app.po';
import {  logging } from 'protractor';
import { browser } from 'protractor';


describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo('/');
    expect(page.getTitleText('app-root h1')).toEqual('Ristorante Con Fusion');
  });
  it('should navigate to about us page by clicking on the link ',()=>{
    page.navigateTo('/');
    let navLink=page.getAllElements('a').get(1);
    navLink.click();
    expect(page.getTitleText('h3')).toBe('About Us');

  });
  it('should enter a new comment for the first dish',()=>{
    page.navigateTo('/dishdetail/0');
    const newAuthor=page.getElement('input[type=text]');
    newAuthor.sendKeys('Test Author ');
    const newComment=page.getElement('textarea');
    newComment.sendKeys('Test comment');
    const newSubmitButton=page.getElement('button[type=submit]');
    
    browser.sleep(10000);
    newSubmitButton.click();
    browser.sleep(10000);
    
    

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
