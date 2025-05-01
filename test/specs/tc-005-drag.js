import HomePage from '../../pages/home.page.js';
import DragPage from '../../pages/drag.page.js';

describe('Drag and Drop Functionality', () => {
  let dragPage;
  let homePage;

  before(async () => {
    homePage = new HomePage();
    await homePage.open();
    await homePage.openDragMenu();
    dragPage = new DragPage();
  });

  it('should drag L2 to drop L2', async () => {
    const dragElement = await dragPage.dragL2Element;
    await dragPage.dragL2ToDropL2();
    await expect(await dragElement.isExisting()).toBe(false); 
  });

  it('should drag C1 to drop C1', async () => {
    const dragElement = await dragPage.dragC1Element;
    await dragPage.dragC1ToDropC1();
    await expect(await dragElement.isExisting()).toBe(false); 
  });

  it('should renew the drag and drop state', async () => {
    await dragPage.renewDragAndDrop();
    await expect(await dragPage.dragL2Element.isExisting()).toBe(true); 
    await expect(await dragPage.dragC1Element.isExisting()).toBe(true);
  });
});