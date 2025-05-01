# Mobile Testing Project - Android WebdriverIO

This project contains automated end-to-end tests for an Android application (`Android-NativeDemoApp-0.4.0.apk`) using WebdriverIO, Appium, and BrowserStack. The tests are designed to ensure the stability and functionality of various user flows within the application.

## Project Overview

This project provides a suite of automated tests for the `Android-NativeDemoApp-0.4.0.apk`. The tests cover key functionalities such as user authentication (login and sign-up), interaction with form elements, navigation within a webview, handling swipe gestures on a carousel, and verifying drag and drop interactions. The tests are executed on a variety of Android environments, including emulators and real devices managed by the BrowserStack cloud testing platform.

## Technologies Used

- **WebdriverIO (v8):** A progressive, extensible, and feature-rich automation framework built on top of Node.js. It provides a powerful API to interact with web and mobile applications.
- **Appium (v2):** An open-source test automation framework for use with native, hybrid, and mobile web apps. It drives iOS, Android, and Windows apps using the WebDriver protocol.
- **BrowserStack:** A cloud-based testing platform that provides access to a wide range of real mobile devices and desktop browsers for automated and manual testing.
- **Mocha:** A feature-rich JavaScript test framework running on Node.js and in the browser, used here as the test runner for WebdriverIO.
- **Allure Reporter:** A flexible, multi-language test report generator that provides clear and informative HTML reports with detailed test execution information, steps, attachments, and history.
- **Faker.js (@faker-js/faker):** A library for generating realistic fake data, used in sign-up tests to create unique user credentials.
- **dotenv:** A zero-dependency module that facilitates loading environment variables from a `.env` file, used for managing sensitive configuration like BrowserStack credentials.
- **GitHub Actions:** A powerful CI/CD (Continuous Integration and Continuous Delivery) platform integrated directly into GitHub, used to automate the execution of tests and the deployment of the Allure report.

## Prerequisites

Ensure you have the following set up in your local development environment:

- **Node.js (v18 or higher):** Download and install from [https://nodejs.org/](https://nodejs.org/). npm is included with Node.js.
- **npm (Node Package Manager):** Usually installed with Node.js.
- **WebdriverIO CLI:** Install globally using the command: `npm install -g @wdio/cli`.
- **Appium Server:** Install globally using the command: `npm install -g appium`.
- **Android SDK Platform-Tools:** Required for interacting with Android emulators. If you have Android Studio installed, these tools are usually located in the `Android/sdk/platform-tools` directory. Ensure this directory is added to your system's PATH environment variable.
- **Android Emulator:** Create and configure an Android Virtual Device (AVD) using the AVD Manager in Android Studio.
- **BrowserStack Account:** Sign up for a BrowserStack account at [https://www.browserstack.com/](https://www.browserstack.com/) and obtain your `BROWSERSTACK_USERNAME` and `BROWSERSTACK_ACCESS_KEY`.
- **APK File:** If you're testing locally, the APK file (Android-NativeDemoApp-0.4.0.apk) should be in the root directory. For BrowserStack tests, upload the APK to BrowserStack and use the generated bs:// App ID.

## Setup

Follow these steps to get the project ready for execution:

1. **Clone the GitHub repository:**

   ```bash
   git clone https://github.com/anavoro/browserstack_test.git
   cd browserstack_test
   ```

2. **Install project dependencies:**

   Run the following command in the project root to install all required packages:

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the root directory and add your BrowserStack credentials. If you’ve uploaded your APK to BrowserStack, you can also include the app ID:

   ```env
   BROWSERSTACK_USERNAME=YOUR_BROWSERSTACK_USERNAME
   BROWSERSTACK_ACCESS_KEY=YOUR_BROWSERSTACK_ACCESS_KEY
   BROWSERSTACK_APP_ID=bs://YOUR_APP_HASHED_ID
   ```

   > **Note:** Ensure that your `.env` file is included in `.gitignore` to prevent sensitive data from being committed to version control.

4. **Cloud Testing with BrowserStack (Recommended):**

   If you're using **BrowserStack**, you **do not** need to start a local Appium server or Android emulator. BrowserStack automatically provisions real devices and manages the Appium server for you.

   > ✅ Skip steps 5 and 6 if you're testing on BrowserStack only.

5. **(Optional) Start a Local Appium Server:**

   If you plan to run tests on a local device or emulator instead of BrowserStack:

   ```bash
   appium
   ```

6. **(Optional) Start your Android Emulator:**

   Use Android Studio's Device Manager to launch your configured emulator. Wait until the emulator fully boots and is ready for interaction.

## Running Tests

Execute the entire WebdriverIO test suite using the following npm script:

```bash
npm run wdio
```

## GitHub Actions Workflow

The project includes a CI/CD workflow defined in `.github/workflows/mobile_test.yml` to automate test execution and Allure report deployment on GitHub Pages. The workflow is triggered on pushes to the `main` branch and pull requests targeting `main`. It performs the following steps:

- Checks out the repository code.
- Sets up the Node.js environment.
- Installs project dependencies using `npm install`.
- Runs the WebdriverIO Android tests on BrowserStack.
- Generates the Allure test report.
- Deploys the Allure report to the `gh-pages` branch of the repository, making it accessible via GitHub Pages.

To enable GitHub Pages deployment, you need to configure it in your repository's settings to serve content from the `gh-pages` branch. Go to your GitHub repository's **Settings** tab, then **Pages**, and under "Source", select **Deploy from a branch** and choose `gh-pages` as the branch.

```

```
