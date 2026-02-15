import { test, expect } from '@playwright/test';

test.describe('Homepage Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('homepage has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('The Internet');
  });

  test('homepage displays welcome heading', async ({ page }) => {
    await expect(page.locator('h1.heading')).toHaveText('Welcome to the-internet');
  });

  test('homepage lists available examples', async ({ page }) => {
    await expect(page.getByText('Available Examples')).toBeVisible();
  });

  test('homepage contains link to Form Authentication', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Form Authentication' })).toBeVisible();
  });

  test('clicking Form Authentication navigates to login page', async ({ page }) => {
    await page.getByRole('link', { name: 'Form Authentication' }).click();

    await expect(page).toHaveURL(/.*\/login/);
    await expect(page.getByText('Login Page')).toBeVisible();
  });

  test('clicking Checkboxes navigates to checkboxes page', async ({ page }) => {
    await page.getByRole('link', { name: 'Checkboxes' }).click();

    await expect(page).toHaveURL(/.*\/checkboxes/);
    await expect(page.getByText('Checkboxes')).toBeVisible();
  });
});
