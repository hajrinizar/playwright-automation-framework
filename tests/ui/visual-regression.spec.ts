import { test, expect } from '@playwright/test';

test.describe('Visual Regression', () => {
  test.skip(({ browserName }) => browserName !== 'chromium', 'Visual baselines are chromium-only');
  test('homepage matches baseline screenshot', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveScreenshot('homepage.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });

  test('login page matches baseline screenshot', async ({ page }) => {
    await page.goto('/login');
    await expect(page).toHaveScreenshot('login-page.png', {
      maxDiffPixelRatio: 0.01,
    });
  });
});
