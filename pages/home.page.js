import BasePage from './base.page.js';

class HomePage extends BasePage {

  get homeBtn() {
    return $('~Home');
  }
  get webViewBtn() {
    return $('~Webview');
  }
  get loginBtn() {
    return $('~Login');
  } 

  get formsBtn() {
    return $('~Forms');
  }

  get swipeBtn() {
    return $('~Swipe');
  }

  get dragBtn() {
    return $('~Drag');
  }
  
async openHomeMenu() {
  await this.clickElement(this.homeBtn);
}

async openLoginMenu() {
    await this.clickElement(this.loginBtn);
}
async openSwipeMenu() {
    await this.clickElement(this.swipeBtn);
}

async openWebView() {
  await this.clickElement(this.webViewBtn);
}

async openFormsMenu() {
  await this.clickElement(this.formsBtn);
}

async openDragMenu() {
  await this.clickElement(this.dragBtn)
}

}

export default HomePage;