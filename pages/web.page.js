import HomePage from './home.page.js';

class WebPage extends HomePage {

  get webviewElement() {
    return $('android=new UiSelector().text("WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO")');
  }
  
  get toggleNavButton() {
   return $('android=new UiSelector().text("Toggle navigation bar")');
}

  get closeNavButton() {
    return $('android=new UiSelector().text("Close navigation bar")');
  }

  get docsLink() {
    return $('android=new UiSelector().description("Docs")');
  }
  
  get apiLink() {
    return $('android=new UiSelector().description("API")');
  }
  
  get blogLink() {
    return $('android=new UiSelector().description("Blog")');
  }
  
  get communityLink() {
    return $('android=new UiSelector().description("Community")');
  }
  
  get sponsorLink() {
    return $('android=new UiSelector().description("Sponsor")');
  }
  
  get versionSelector() {
    return $('android=new UiSelector().description("v9")');
  }

  get languagesButton() {
    return $('android=new UiSelector().text("Languages")');
  }

  async waitForWebViewToLoad() {
    await this.webviewElement.waitForDisplayed({ timeout: 10000 });
    await driver.pause(2000);
  }

  async switchToWebViewContext() {
    const contexts = await driver.getContexts();
    console.log('Available contexts:', contexts);

    const webviewContext = contexts.find(context => context.includes('WEBVIEW'));
    if (!webviewContext) {
      throw new Error('No webview context found');
    }

    await driver.switchContext(webviewContext);
    console.log('Switched to context:', await driver.getContext());
    return webviewContext;
  }

  async switchToNativeContext() {
    await driver.switchContext('NATIVE_APP');
    console.log('Switched to native context');
  }

  async openNavigation() {
    await this.toggleNavButton.waitForDisplayed({ timeout: 5000 });
    await this.toggleNavButton.click();
  }

  async closeNavigation() {
    await this.closeNavButton.click();
  }

  getNavigationMenu() {
    return {
      docs: this.docsLink,
      api: this.apiLink,
      blog: this.blogLink,
      community: this.communityLink,
      sponsor: this.sponsorLink,
      versionSelector: this.versionSelector,
      languages: this.languagesButton
    };
  }
}

export default WebPage; 