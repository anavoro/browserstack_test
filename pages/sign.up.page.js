import LoginPage from './login.page.js';

class SignUpPage extends LoginPage {
    get useremailField() { return $('~input-email') }
    get passwordField() { return $('~input-password') }
    get confirmPasswordField() { return $('~input-repeat-password')} 
    get signUpButton() { return $('~button-SIGN UP') }

    get notificationTitle() {
        return $('android=new UiSelector().resourceId("android:id/alertTitle")');
      }
    
      get notificationMessage() {
        return $('//android.widget.TextView[@resource-id="android:id/message"]');
      }

      get closeButton() {
        return $('android=new UiSelector().resourceId("android:id/button1")');
      }

      async signUp(username, password) {
        await this.setValue(this.useremailField, username);
        await this.setValue(this.passwordField, password);
        await this.setValue(this.confirmPasswordField, password);
        await this.clickElement(this.signUpButton); 
      }
      
      async assertNotification(titleText, messageText) {
        await expect(this.notificationTitle).toHaveText(titleText);
        await expect(this.notificationMessage).toHaveText(messageText);
      }

      async closeNotificationPopup() {
        await this.clickElement(this.closeButton); 
      }

      async openSignUpMenu() {
        await this.clickElement(this.signUpButton); 
      }
    }

  export default SignUpPage;