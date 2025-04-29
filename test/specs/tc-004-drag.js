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
    await dragPage.dragL2ToDropL2();
    await expect(await dragPage.isL2InDropL2()).toBe(true); 
  });

  it('should drag C1 to drop C1', async () => {
    await dragPage.dragC1ToDropC1();
    await expect(await dragPage.isC1InDropC1()).toBe(true); 
  });

  it('should renew the drag and drop state', async () => {
    await dragPage.renewDragAndDrop();
    await expect(await dragPage.isL2InDropL2()).toBe(false);
    await expect(await dragPage.isC1InDropC1()).toBe(false);
  });
});