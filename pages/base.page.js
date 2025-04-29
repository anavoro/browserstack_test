class BasePage {
    async waitForElement(element, timeout = 10000) {
      await element.waitForDisplayed({ timeout });
    }
  
    async clickElement(element) {
      await this.waitForElement(element);
      await element.click();
    }
  
    async getTextOfElement(element) {
      await this.waitForElement(element);
      return await element.getText();
    }
  
    async isElementDisplayed(element) {
      return await element.isDisplayed();
    }

    async setValue(element, value) {
        await this.waitForElement(element);
        await element.setValue(value);
      }

      async open() {
        await driver.launchApp(); 
      }
      
  }
  
  export default BasePage;