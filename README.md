<p align="center">
  <img src="assets/Nenya_Logo_01.png" alt="Nenya Logo" width="1800"/>
</p>

<h1 align="center">Nenya QA Automation Framework</h1>
<p align="center">
  <b>Minimal, Fast & Flexible QA Automation Skeleton powered by <a href="https://playwright.dev/">Playwright</a></b>
 <p align="center">
  <i>Made with ❤️ by <a href="https://www.nenya.io/">Nenya</a></i>
</p>
</p>

---

##  What does it offer?

- **Page Object Model (POM)**: Makes your test code clean and maintainable by separating selectors and actions from test logic.
- **API Testing**: Easily validate and test your REST APIs.
- **Data-Driven Approach**: Effortless test data management with the `data/` and `fixtures/` directories.
- **Built-in Reporting**: Automatically generate rich HTML reports with screenshots and traces on failure.
- **CI/CD Ready**: Seamless integration with your pipelines via `.github/workflows/`.

---

##  Tech Stack

- **Language:** TypeScript
- **Automation:** Playwright
- **CI/CD:** GitHub Actions

---

## Getting Started

### Prerequisites

- **Node.js**: Make sure you have the latest stable version installed.

### Installation

```bash
git clone [repository_url]
cd [project_name]
npm install
```

### Running Tests

```bash
# Run all tests
npx playwright test

# Run with UI mode (for debugging)
npx playwright test --ui

# Run a specific test file
npx playwright test tests/example.spec.ts
```

### Viewing Reports

```bash
npx playwright show-report
```

---

##  Project Structure

```
├── assets/     # Static assets 
├── data/       # Test scenario data files
├── fixtures/   # API fixtures or reusable test data
├── pages/      # POM: Page objects and methods 
├── reports/    # Test execution reports
├── scripts/    # Utility or automation scripts
├── setup/      # Setup files
├── tests/      # Test files
├── utils/      # Helper functions 
```

---



##  Customization

This framework is a starting point! Feel free to **modify and expand** it to suit your needs:

- Add new test suites under the `tests/` directory.
- Create new Page Objects or API clients to model your app.
- Integrate other reporting tools such as **Allure** or **JUnit** .
- Add custom utilities to the `utils/` folder (e.g. authentication helpers, random data generators, custom assertions).
- Extend the CI/CD pipeline with new deployment or reporting steps.

---
