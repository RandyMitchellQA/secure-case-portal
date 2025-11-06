import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('valid login goes to inventory', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await login.assertOnInventory();
  await page.pause();
});

test('invalid login shows error', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('locked_out_user', 'bad_password');
  await login.assertError('Epic sadface');
  await page.pause();
});
