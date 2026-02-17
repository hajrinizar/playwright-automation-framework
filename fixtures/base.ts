import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CheckboxPage } from '../pages/CheckboxPage';
import { AlertsPage } from '../pages/AlertsPage';
import { DropdownPage } from '../pages/DropdownPage';
import { DynamicLoadingPage } from '../pages/DynamicLoadingPage';

interface PageObjects {
  loginPage: LoginPage;
  checkboxPage: CheckboxPage;
  alertsPage: AlertsPage;
  dropdownPage: DropdownPage;
  dynamicLoadingPage: DynamicLoadingPage;
}

export const test = base.extend<PageObjects>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  checkboxPage: async ({ page }, use) => {
    await use(new CheckboxPage(page));
  },
  alertsPage: async ({ page }, use) => {
    await use(new AlertsPage(page));
  },
  dropdownPage: async ({ page }, use) => {
    await use(new DropdownPage(page));
  },
  dynamicLoadingPage: async ({ page }, use) => {
    await use(new DynamicLoadingPage(page));
  },
});

export { expect } from '@playwright/test';
