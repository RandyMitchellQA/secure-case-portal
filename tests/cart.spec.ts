import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

test('add to cart adds item and shows badge', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await inventory.assertOnInventoryPage();
  await inventory.addBackpackToCart();
  await inventory.assertCartBadgeCount(2);

  await inventory.openCart();
  await cart.assertOnCartPage();
  await cart.assertBackpackVisible();
});

test('remove from cart removes item and clears badge', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await inventory.assertOnInventoryPage();
  await inventory.addBackpackToCart();
  await inventory.assertCartBadgeCount(1);

  await inventory.openCart();
  await cart.assertOnCartPage();

  await cart.removeBackpackFromCart();
  await cart.assertBackpackNotVisible();

  await page.goBack();
  await inventory.assertOnInventoryPage();
  await inventory.assertCartBadgeCount(0);
});
