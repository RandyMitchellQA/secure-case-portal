import { expect, Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async assertOnCartPage() {
    await expect(this.page).toHaveURL(/cart\.html/);
    await expect(this.page.getByText('Your Cart')).toBeVisible();
  }

  async assertBackpackVisible() {
    await expect(this.page.getByText('Sauce Labs Backpack')).toBeVisible();
  }

  async removeBackpackFromCart() {
    await this.page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  }

  async assertBackpackNotVisible() {
    await expect(this.page.getByText('Sauce Labs Backpack')).toHaveCount(0);
  }
}
