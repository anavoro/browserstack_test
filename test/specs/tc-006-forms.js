import HomePage from '../../pages/home.page.js';
import FormsPage from '../../pages/forms.page.js';

describe('Forms Interaction Tests', () => {
  let homePage;
  let formsPage;

  before(async () => {
    homePage = new HomePage(); 
    await homePage.open();
    await homePage.openFormsMenu();
    formsPage = new FormsPage();
  });

  it('should type text into the input field and verify the output', async () => {
    const inputText = 'WebdriverIO Test Input';
    await formsPage.typeInInputField(inputText);
    const inputValue = await formsPage.getInputValue();
    expect(inputValue).toBe(inputText);
  });

  it('should toggle the switch and verify its state', async () => {
    const initialSwitchState = await formsPage.isSwitchOn();
    await formsPage.toggleSwitch();
    const newSwitchState = await formsPage.isSwitchOn();
    expect(newSwitchState).not.toBe(initialSwitchState);

    await formsPage.toggleSwitch();
    const finalSwitchState = await formsPage.isSwitchOn();
    expect(finalSwitchState).toBe(initialSwitchState);
  });

  it('should select a specific item from the dropdown and verify the selection', async () => {
    const selectedItemText = 'Appium is awesome';
    await formsPage.selectDropdownItem(selectedItemText);
    const selectedValue = await formsPage.getSelectedDropdownValue();
    expect(selectedValue).toBe(selectedItemText);
  });

  it('should select a random item from the dropdown and verify a selection was made', async () => {
    await driver.pause(1000); 
    const randomlySelectedItemText = await formsPage.selectRandomDropdownItem();
    const newDropdownValue = await formsPage.getSelectedDropdownValue();
    expect(newDropdownValue).toBe(randomlySelectedItemText); 
  });
});
