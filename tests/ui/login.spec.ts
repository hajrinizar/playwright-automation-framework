import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Login Page', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('successful login with valid credentials', async ({ page }) => {
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await expect(page).toHaveURL(/.*\/secure/);
    await loginPage.expectFlashMessage('You logged into a secure area!');
  });

  test('failed login with invalid username', async ({ page }) => {
    await loginPage.login('wronguser', 'SuperSecretPassword!');
    await expect(page).toHaveURL(/.*\/login/);
    await loginPage.expectFlashMessage('Your username is invalid!');
  });

  test('failed login with invalid password', async ({ page }) => {
    await loginPage.login('tomsmith', 'wrongpassword');
    await expect(page).toHaveURL(/.*\/login/);
    await loginPage.expectFlashMessage('Your password is invalid!');
  });

  test('logout after successful login', async ({ page }) => {
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await expect(page).toHaveURL(/.*\/secure/);
    await loginPage.logout();
    await expect(page).toHaveURL(/.*\/login/);
    await loginPage.expectFlashMessage('You logged out of the secure area!');
  });
});
