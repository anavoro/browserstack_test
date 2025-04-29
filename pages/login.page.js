import HomePage from './home.page.js';

class LoginPage extends HomePage {
    get useremailField() { return $('~input-email') }
    get passwordField() { return $('~input-password') }
    get loginButton() { return $('~button-LOGIN') }
    get signUpButton() { return $('~button-sign-up-container'); }

    get successTitle() {
        return $('android=new UiSelector().resourceId("android:id/alertTitle").text("Success")');
    }

    get successMessage() {
        return $('android=new UiSelector().resourceId("android:id/message").text("You are logged in!")');
    }

    get okButton() {
        return $('android=new UiSelector().resourceId("android:id/button1").text("OK")');
    }

    async login(username, password) {
        await this.setValue(this.useremailField, username);
        await this.setValue(this.passwordField, password);
        await this.clickElement(this.loginButton);
    }

    async openSignUpMenu() {
        await this.clickElement(this.signUpButton);
    }

    async isSuccessMessageDisplayed() {
        try {
            await this.waitForElement(this.successTitle);
            await this.waitForElement(this.successMessage);
            return await this.successTitle.isDisplayed() && await this.successMessage.isDisplayed();
        } catch (error) {
            return false;
        }
    }

    async assertSuccessMessage() {
        await expect(this.successTitle).toHaveText('Success');
        await expect(this.successMessage).toHaveText('You are logged in!');
    }

    async closeSuccessMessage() {
        await this.clickElement(this.okButton);
    }
}

export default LoginPage;