Secure Case Portal – Playwright Test Automation

This project demonstrates end to end testing using Playwright + TypeScript, built as a mock government style Secure Case Portal login and logout flow (using saucedemo.com).

🧪 Tech Stack

Playwright Test Runner

TypeScript

Page Object Model (POM)

Visual Studio Code

Git and GitHub version control

✅ Test Coverage
Login

Valid login → navigates to inventory

Invalid login → shows error message

Logout

User logs out and returns to login page

▶️ Run Tests Locally
npm install
npx playwright install
npx playwright test --headed

## 📊 Playwright HTML Report
![Playwright Report](./playwright-report.png)

## 🚨 CI Failure Example (Regression Detection)

This project intentionally includes a failing test commit to demonstrate how CI catches regressions.

Example:
- A cart badge assertion was intentionally set to an incorrect value
- GitHub Actions detected the failure automatically
- The pipeline failed before merge

This mirrors real-world QA workflows where CI prevents broken changes from reaching production.



👤 Author

Randy Mitchell
QA Engineer
LinkedIn: https://www.linkedin.com/in/randy-mitchell-74467217b
