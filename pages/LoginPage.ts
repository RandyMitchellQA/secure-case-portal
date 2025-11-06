import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.page.getByPlaceholder('Username').fill(username);
    await this.page.getByPlaceholder('Password').fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  async assertOnInventory() {
    await expect(this.page).toHaveURL(/inventory\.html/);
    await expect(this.page.getByText('Products')).toBeVisible();
  }

  async assertError(contains: string) {
    await expect(this.page.locator('[data-test="error"]')).toContainText(contains);

  }
}
