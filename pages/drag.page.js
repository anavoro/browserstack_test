import HomePage from './home.page.js';

class DragPage extends HomePage {

  get dragL2Element() {
    return $('~drag-l2');
  }
  
  get dropL2Target() {
    return $('~drop-l2');
  }
  
  get dragC1Element() {
    return $('~drag-c1');
  }
  
  get dropC1Target() {
    return $('~drop-c1');
  }
  
  get renewButton() {
    return $('~renew');
  }

  async dragAndDrop(sourceElement, targetElement) {
    const sourceLocation = await sourceElement.getLocation();
    const sourceSize = await sourceElement.getSize();
    const targetLocation = await targetElement.getLocation();
    const targetSize = await targetElement.getSize();
  
    const startX = Math.floor(sourceLocation.x + (sourceSize.width / 2));
    const startY = Math.floor(sourceLocation.y + (sourceSize.height / 2));
    const endX = Math.floor(targetLocation.x + (targetSize.width / 2));
    const endY = Math.floor(targetLocation.y + (targetSize.height / 2));
  
    await driver.touchAction([
      { action: 'longPress', x: startX, y: startY },
      { action: 'moveTo', x: endX, y: endY },
      'release'
    ]);

    await browser.pause(500);
  }

  async dragL2ToDropL2() {
    const dragElement = await this.dragL2Element;
    const dropTarget = await this.dropL2Target;
  
    await dragElement.waitForDisplayed({ timeout: 5000 });
    await dropTarget.waitForDisplayed({ timeout: 5000 });
  
    await this.dragAndDrop(dragElement, dropTarget);
  }
  
  async dragC1ToDropC1() {
    const dragElement = await this.dragC1Element;
    const dropTarget = await this.dropC1Target;
  
    await dragElement.waitForDisplayed({ timeout: 5000 });
    await dropTarget.waitForDisplayed({ timeout: 5000 });
  
    await this.dragAndDrop(dragElement, dropTarget);
  }

  async renewDragAndDrop() {
    const button = await this.renewButton;
    await button.waitForDisplayed({ timeout: 5000 });
    await button.click();
    await browser.pause(500); 
  }

  async isL2InDropL2() {
    return await this.dropL2Target.$('*[content-desc="drag-l2"]').isExisting();
  }

  async isC1InDropC1() {
    return await this.dropC1Target.$('*[content-desc="drag-c1"]').isExisting();
  }
}
export default DragPage;
