import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CheckboxPage } from '../pages/CheckboxPage';
import { AlertsPage } from '../pages/AlertsPage';
import { DropdownPage } from '../pages/DropdownPage';
import { DynamicLoadingPage } from '../pages/DynamicLoadingPage';
import { FileUploadPage } from '../pages/FileUploadPage';
import { FramesPage } from '../pages/FramesPage';
import { DragAndDropPage } from '../pages/DragAndDropPage';

interface PageObjects {
  loginPage: LoginPage;
  checkboxPage: CheckboxPage;
  alertsPage: AlertsPage;
  dropdownPage: DropdownPage;
  dynamicLoadingPage: DynamicLoadingPage;
  fileUploadPage: FileUploadPage;
  framesPage: FramesPage;
  dragAndDropPage: DragAndDropPage;
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
  fileUploadPage: async ({ page }, use) => {
    await use(new FileUploadPage(page));
  },
  framesPage: async ({ page }, use) => {
    await use(new FramesPage(page));
  },
  dragAndDropPage: async ({ page }, use) => {
    await use(new DragAndDropPage(page));
  },
});

export { expect } from '@playwright/test';
