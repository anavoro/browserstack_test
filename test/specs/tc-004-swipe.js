import HomePage from '../../pages/home.page.js';
import SwipePage from '../../pages/swipe.page.js';

describe('Swipe Test - Specific Content Verification', () => {
  let homePage;
  let swipePage;
  const expectedCardTexts = [
    "FULLY OPEN SOURCE",
    "GREAT COMMUNITY",
    "JS.FOUNDATION",
    "SUPPORT VIDEOS",
    "EXTENDABLE",
    "COMPATIBLE",
  ];

  before(async () => {
    homePage = new HomePage();
    swipePage = new SwipePage();
    await homePage.open();
    await homePage.openSwipeMenu();
  });

  it('should display the first card initially with expected text', async () => {
    expect(await swipePage.isCardVisible(1)).toBe(true);
    const initialText = await swipePage.getCardTextByIndex(1);
    expect(expectedCardTexts).toContain(initialText);
  });
  
  it('should swipe left and display the next expected content', async () => {
    await swipePage.swipeToNextCard();
    await driver.pause(1000); 
    const newCenterText = await swipePage.getCenterCardText();
    expect(newCenterText).toEqual("GREAT COMMUNITY"); 
  });

  it('should swipe right and display the previous expected content', async () => {
    await swipePage.swipeToPreviousCard();
    await driver.pause(1000);
    const newCenterText = await swipePage.getCardTextByIndex(1); 
    expect(newCenterText).toEqual("FULLY OPEN SOURCE");
  });

  it('should swipe left multiple times and verify the content of the last card', async () => {
    const numberOfSwipes = 3;
    const expectedLastCardText = expectedCardTexts[numberOfSwipes]; 

    for (let i = 0; i < numberOfSwipes; i++) {
      await swipePage.swipeToNextCard();
      await driver.pause(1000);
    }

    const lastCenterCardText = await swipePage.getCenterCardText();
    expect(lastCenterCardText).toEqual(expectedLastCardText);
  });
});