import { test, expect } from '../../fixtures/base';

test.describe('Login Page', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('successful login with valid credentials', async ({ loginPage, page }) => {
    await loginPage.login('tomsmith', 'SuperSecretPassword!');

    await expect(page).toHaveURL(/.*\/secure/);
    await loginPage.expectFlashMessage('You logged into a secure area!');
  });

  test('failed login with invalid username', async ({ loginPage, page }) => {
    await loginPage.login('wronguser', 'SuperSecretPassword!');

    await expect(page).toHaveURL(/.*\/login/);
    await loginPage.expectFlashMessage('Your username is invalid!');
  });

  test('failed login with invalid password', async ({ loginPage, page }) => {
    await loginPage.login('tomsmith', 'wrongpassword');

    await expect(page).toHaveURL(/.*\/login/);
    await loginPage.expectFlashMessage('Your password is invalid!');
  });

  test('logout after successful login', async ({ loginPage, page }) => {
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await expect(page).toHaveURL(/.*\/secure/);

    await loginPage.logout();

    await expect(page).toHaveURL(/.*\/login/);
    await loginPage.expectFlashMessage('You logged out of the secure area!');
  });
});
