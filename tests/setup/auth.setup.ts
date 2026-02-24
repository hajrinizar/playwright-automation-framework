import { test as setup, expect } from '@playwright/test';
import path from 'node:path';

const AUTH_FILE = path.join(__dirname, '../../.auth/user.json');

/**
 * Authentication setup — runs once before any test that depends on a
 * logged-in session. Persists browser storage state to disk so downstream
 * tests can skip the login flow entirely.
 */
setup('authenticate as default user', async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: ' Login' }).click();

  await expect(page).toHaveURL(/\/secure/);
  await page.context().storageState({ path: AUTH_FILE });
});
