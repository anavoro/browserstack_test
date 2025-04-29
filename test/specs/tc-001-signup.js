import SignUpPage from '../../pages/sign.up.page.js';
import HomePage from '../../pages/home.page.js';
import LoginPage from '../../pages/login.page.js'; 
import { faker } from '@faker-js/faker';

describe('Sign Up Flow', () => {
  let homePage;
  let loginPage;
  let signUpPage;

  before(async () => {
    homePage = new HomePage();
    await homePage.open();
    await homePage.openLoginMenu();

    loginPage = new LoginPage();
    await loginPage.openSignUpMenu();

    signUpPage = new SignUpPage();
  });

  it('should allow a new user to sign up successfully', async () => {
    const randomEmail = faker.internet.email();
    const randomPassword = faker.internet.password(10, true);

    await signUpPage.signUp(randomEmail, randomPassword);

    await expect(signUpPage.notificationTitle).toBeDisplayed();
    await expect(signUpPage.notificationMessage).toBeDisplayed();

    await signUpPage.assertNotification('Signed Up!', 'You successfully signed up!');

    await signUpPage.closeNotificationPopup();
  });
});
