import { expect, Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async assertOnInventoryPage() {
    await expect(this.page).toHaveURL(/inventory\.html/);
    await expect(this.page.getByText('Products')).toBeVisible();
  }

  async addBackpackToCart() {
    await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }

  async removeBackpackFromCart() {
    await this.page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  }

  async openCart() {
    await this.page.locator('[data-test="shopping-cart-link"]').click();
  }

  async assertCartBadgeCount(count: number) {
    const badge = this.page.locator('[data-test="shopping-cart-badge"]');
    if (count === 0) {
      await expect(badge).toHaveCount(0);
    } else {
      await expect(badge).toHaveText(String(count));
    }
  }
}
