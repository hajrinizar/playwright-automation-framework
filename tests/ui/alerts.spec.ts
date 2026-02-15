import { test, expect } from '@playwright/test';
import { AlertsPage } from '../../pages/AlertsPage';

test.describe('JavaScript Alerts Page', () => {
  let alertsPage: AlertsPage;

  test.beforeEach(async ({ page }) => {
    alertsPage = new AlertsPage(page);
    await alertsPage.goto();
  });

  test('accepting a JS alert', async () => {
    await alertsPage.acceptAlert();
    await alertsPage.expectResult('You successfully clicked an alert');
  });

  test('accepting a JS confirm', async () => {
    await alertsPage.acceptConfirm();
    await alertsPage.expectResult('You clicked: Ok');
  });

  test('dismissing a JS confirm', async () => {
    await alertsPage.dismissConfirm();
    await alertsPage.expectResult('You clicked: Cancel');
  });

  test('accepting a JS prompt with input text', async () => {
    await alertsPage.acceptPrompt('Hello Playwright');
    await alertsPage.expectResult('You entered: Hello Playwright');
  });

  test('dismissing a JS prompt', async () => {
    await alertsPage.dismissPrompt();
    await alertsPage.expectResult('You entered: null');
  });
});
