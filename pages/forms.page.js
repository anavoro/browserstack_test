import HomePage from './home.page.js';

class FormsPage extends HomePage {

  get inputField() {
    return $('~text-input');
  }

  get inputTextResult() {
    return $('~input-text-result');
  }

  get switchElement() {
    return $('~switch');
  }

  get switchOffText() {
    return $('android=new UiSelector().text("OFF").sibling(android.widget.Switch[@content-desc="switch"])');
  }

  get switchOnText() {
    return $('android=new UiSelector().text("ON").sibling(android.widget.Switch[@content-desc="switch"])');
  }

  get dropdown() {
    return $('//android.view.ViewGroup[@resource-id="icon_container"]');
  }

  get itemWindow() {
    return $('android=new UiSelector().resourceId("android:id/content")');
  }

  async typeInInputField(text) {
    await this.inputField.waitForDisplayed();
    await this.inputField.setValue(text);
  }

  async getInputValue() {
    await this.inputTextResult.waitForDisplayed();
    return await this.inputTextResult.getText();
  }

  async toggleSwitch() {
    await this.switchElement.waitForDisplayed();
    await this.switchElement.click();
  }

  async isSwitchOn() {
    const switchText = await this.switchElement.getText();
    return switchText === 'ON';
  }

  async openDropdown() {
    await this.dropdown.waitForDisplayed();
    await this.dropdown.click();
    await this.itemWindow.waitForDisplayed();
  }

  async selectDropdownItem(itemText) {
    await this.openDropdown();
    const dropdownItem = await $(`android=new UiSelector().text("${itemText}")`);
    await dropdownItem.waitForDisplayed();
    await dropdownItem.click();
  }

async selectRandomDropdownItem() {
  await this.openDropdown();
  const itemsElements = await $$('//android.widget.CheckedTextView[@resource-id="android:id/text1"]');
  if (itemsElements.length === 0) {
    throw new Error('No dropdown items found');
  }
  const randomIndex = Math.floor(Math.random() * itemsElements.length);
  const randomSelectedItemElement = itemsElements[randomIndex];
  const randomSelectedItemText = await randomSelectedItemElement.getText();
  await randomSelectedItemElement.click();
  await driver.pause(500);
  
  return randomSelectedItemText;
}

  async getSelectedDropdownValue() {
    const dropdownContainer = await $('//android.view.ViewGroup[@content-desc="Dropdown"]');
    const valueElement = await dropdownContainer.$('android.widget.EditText');
    await valueElement.waitForDisplayed();
    return await valueElement.getAttribute('text');
  }

  async clickActiveButton() {
    await this.activeButton.waitForDisplayed();
    await this.activeButton.click();
  }

  async clickInactiveButton() {
    await this.inactiveButton.waitForDisplayed();
    await this.inactiveButton.click();
  }
}

export default FormsPage;