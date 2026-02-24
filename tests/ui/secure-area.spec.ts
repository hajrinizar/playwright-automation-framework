import { test, expect } from '../../fixtures/base';

/**
 * Tests that depend on an authenticated session.
 *
 * The authenticated project in playwright.config.ts demonstrates Playwright's
 * storageState pattern with project dependencies. In apps with persistent
 * server-side sessions, the login would happen once in auth.setup.ts and all
 * tests here would run pre-authenticated. Since the target app uses ephemeral
 * sessions, we authenticate via the page object as a reliable fallback.
 */
test.describe('Secure Area', () => {
  test.beforeEach(async ({ loginPage, page }) => {
    await loginPage.goto();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await expect(page).toHaveURL(/\/secure/);
  });

  test('secure page displays protected content', async ({ page }) => {
    await expect(page.locator('h2')).toContainText('Secure Area');
    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
  });

  test('logout redirects to login page', async ({ loginPage, page }) => {
    await loginPage.logout();
    await expect(page).toHaveURL(/\/login/);
    await loginPage.expectFlashMessage('You logged out of the secure area!');
  });
});
