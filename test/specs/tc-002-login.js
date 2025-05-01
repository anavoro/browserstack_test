import HomePage from '../../pages/home.page.js';
import LoginPage from '../../pages/login.page.js';

describe('Login Functionality Test', () => {
  let homePage;
  let loginPage;

  before(async () => {
    homePage = new HomePage();
    await homePage.open();
    await homePage.openLoginMenu();
    loginPage = new LoginPage();
  });

  it('should login with valid credentials', async () => {
    const validEmail = process.env.VALID_USER_EMAIL || 'mimi@example.com';
    const validPassword = process.env.VALID_USER_PASSWORD || 'kiki2025';

    await loginPage.login(validEmail, validPassword);

    await expect(await loginPage.isSuccessMessageDisplayed()).toBe(true);

    await loginPage.assertSuccessMessage();

    await loginPage.closeSuccessMessage();
  });
});
