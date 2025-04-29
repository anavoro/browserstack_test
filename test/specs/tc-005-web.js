import HomePage from '../../pages/home.page.js';
import WebPage from '../../pages/web.page.js';

describe('WebdriverIO Webview Navigation Elements Test', () => {
  let homePage;
  let webPage;

  before(async () => {
    homePage = new HomePage();
    await homePage.open();
    await homePage.openWebView(); 
    webPage = new WebPage();
  });

  it('should verify that all navigation elements are present', async () => {
    await webPage.waitForWebViewToLoad();
    await webPage.openNavigation();
    
    const nav = webPage.getNavigationMenu();
    await expect(nav.docs).toBeDisplayed();
    await expect(nav.api).toBeDisplayed();
    await expect(nav.blog).toBeDisplayed();
    await expect(nav.community).toBeDisplayed();
    await expect(nav.sponsor).toBeDisplayed();
    await expect(nav.versionSelector).toBeDisplayed();
    await expect(nav.languages).toBeDisplayed();
    
    await webPage.closeNavigation();
  });
});
