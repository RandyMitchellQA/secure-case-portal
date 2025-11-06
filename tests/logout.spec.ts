import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { LogoutPage } from '../pages/LogoutPage';

test('user can logout after login', async ({ page }) => {
  const login = new LoginPage(page);
  const logout = new LogoutPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await logout.logout();
  await logout.assertLogout();
  await page.pause();
});
