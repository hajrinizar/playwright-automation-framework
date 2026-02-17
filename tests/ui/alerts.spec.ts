import { test } from '../../fixtures/base';

test.describe('JavaScript Alerts Page', () => {
  test.beforeEach(async ({ alertsPage }) => {
    await alertsPage.goto();
  });

  test('accepting a JS alert', async ({ alertsPage }) => {
    await alertsPage.acceptAlert();
    await alertsPage.expectResult('You successfully clicked an alert');
  });

  test('accepting a JS confirm', async ({ alertsPage }) => {
    await alertsPage.acceptConfirm();
    await alertsPage.expectResult('You clicked: Ok');
  });

  test('dismissing a JS confirm', async ({ alertsPage }) => {
    await alertsPage.dismissConfirm();
    await alertsPage.expectResult('You clicked: Cancel');
  });

  test('accepting a JS prompt with input text', async ({ alertsPage }) => {
    await alertsPage.acceptPrompt('Hello Playwright');
    await alertsPage.expectResult('You entered: Hello Playwright');
  });

  test('dismissing a JS prompt', async ({ alertsPage }) => {
    await alertsPage.dismissPrompt();
    await alertsPage.expectResult('You entered: null');
  });
});
