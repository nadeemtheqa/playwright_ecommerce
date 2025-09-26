# Playwright Automation Framework for E-commerce UI Testing


This repository contains a **Playwright Automation Framework** designed for UI automation testing of an eCommerce website.
The framework is built to facilitate reliable, maintainable, and scalable automated tests using modern automation best practices.

---

# Features

1 Cross-browser testing:** Chromium, Firefox, and WebKit.
2 Headed and headless test execution.
3 Page Object Model (POM) structure for maintainable and reusable code.
4 Support for screenshots and test reporting.
5 Easy setup and configuration.

---

# Scenarios 

1. Login (Positive and Negative) + Validations
2. Cart Features (Positive and Negative) + Validations
3. Checkout (Positive and Negative) + Validations


# Prerequisites

Before setting up the project, make sure you have the following installed:

* [Node.js](https://nodejs.org/) (v16 or higher recommended)
* [npm](https://www.npmjs.com/) (comes with Node.js)
* Modern web browser (Chrome, Edge, Firefox, Safari)

---

## Project Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/nadeemtheqa/playwright
   cd ecommerce-playwright-framework
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Install Playwright browsers:**

   ```bash
   npx playwright install
   ```

---

## 🏃‍♂️ Running Tests

### Run in Headless Mode (default)

```bash
npx playwright test
```

### Run in Headed Mode

```bash
npx playwright test --headed
```

### Run Tests in a Specific Browser

```bash
# Chromium
npx playwright test --browser=chromium

# Firefox
npx playwright test --browser=firefox

# WebKit (Safari)
npx playwright test --browser=webkit
```

### Run a Single Test File

```bash
npx playwright test tests/test-file-name.spec.ts
```

---

## 📄 Test Reports & Artifacts

* Screenshots are automatically captured on test failures.
* HTML reports can be generated using:

```bash
npx playwright show-report
```

---

# Best Practices

* Use **Page Object Model (POM)** to separate test logic from UI interactions.
* Keep tests **atomic and independent**.
* Use descriptive test names for readability.
* Capture screenshots and logs for debugging.

---

# References

* [Playwright Official Documentation](https://playwright.dev/docs/intro)
* [Playwright Test Runner](https://playwright.dev/docs/test-intro)

