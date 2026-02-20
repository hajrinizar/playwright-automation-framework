import { test, expect } from '@playwright/test';

test.describe('Multiple Windows', () => {
  test('clicking the link opens a new window', async ({ page, context }) => {
    await page.goto('/windows');

    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page.getByRole('link', { name: 'Click Here' }).click(),
    ]);

    await newPage.waitForLoadState();
    await expect(newPage).toHaveURL(/\/windows\/new/);
    await expect(newPage.locator('h3')).toHaveText('New Window');
  });
});
