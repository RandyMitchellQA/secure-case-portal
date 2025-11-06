import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async navigateTo(path: string) {
    await this.page.goto(`https://www.saucedemo.com/${path}`);
  }

  async takeScreenshot(name: string) {
    await this.page.screenshot({ path: `test-results/${name}.png` });
  }
}
