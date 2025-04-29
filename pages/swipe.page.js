import HomePage from "./home.page.js";

class SwipePage extends HomePage {

  get carousel() {
    return $('~Carousel');
  }

  cardByIndex(index) {
    return $(`(//android.view.ViewGroup[@content-desc="card"])[${index}]`);
  }

  get centerCard() {
    return $('(//android.view.ViewGroup[@content-desc="card"])[2]');
  }

  async swipeToNextCard() {
    const { width, height } = await driver.getWindowSize();
    const startX = Math.floor(width * 0.9);
    const endX = Math.floor(width * 0.1);
    const y = Math.floor(height * 0.5);

    await driver.touchPerform([
      { action: 'press', options: { x: startX, y: y } },
      { action: 'wait', options: { ms: 1000 } },
      { action: 'moveTo', options: { x: endX, y: y } },
      { action: 'release' },
    ]);

    await driver.pause(2000);
  }

  async swipeToPreviousCard() {
    const { width, height } = await driver.getWindowSize();
    const startX = Math.floor(width * 0.1);
    const endX = Math.floor(width * 0.95);
    const y = Math.floor(height * 0.5);

    await driver.touchPerform([
      { action: 'press', options: { x: startX, y: y } },
      { action: 'wait', options: { ms: 1200 } },
      { action: 'moveTo', options: { x: endX - 50, y: y } },
      { action: 'release' },
    ]);

    await driver.pause(2000);
  }

  async isCardVisible(index) {
    try {
      const card = this.cardByIndex(index);
      return await card.isDisplayed();
    } catch {
      return false;
    }
  }

  async getCardTextByIndex(index) {
    const card = await $(`(//android.view.ViewGroup[@content-desc="card"])[${index}]`);
    const slideTextContainer = await card.$('[content-desc="slideTextContainer"]');
    await slideTextContainer.waitForDisplayed({ timeout: 5000 });
    const textViews = await slideTextContainer.$$('android.widget.TextView');
    for (const textView of textViews) {
      const text = await textView.getText();
      if (text && text !== "󰘑" && text !== "󰊤") {
        return text;
      }
    }
    return null;
  }

  async getCenterCardText() {
    return this.getCardTextByIndex(2);
  }

  async swipeAndGetCenterCardText(swipeDirection) {
    if (swipeDirection === 'next') {
      await this.swipeToNextCard();
    } else if (swipeDirection === 'previous') {
      await this.swipeToPreviousCard();
    }
    return await this.getCenterCardText();
  }
}

export default SwipePage;