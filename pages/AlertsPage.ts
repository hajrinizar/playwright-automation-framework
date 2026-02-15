import { type Locator, type Page, expect } from '@playwright/test';

/**
 * Page Object for the JavaScript Alerts page (/javascript_alerts).
 *
 * Each dialog method registers a one-time listener before triggering
 * the dialog, ensuring the handler is in place before the blocking
 * dialog appears.
 */
export class AlertsPage {
  private readonly page: Page;
  private readonly alertButton: Locator;
  private readonly confirmButton: Locator;
  private readonly promptButton: Locator;
  private readonly result: Locator;

  constructor(page: Page) {
    this.page = page;
    this.alertButton = page.getByRole('button', { name: 'Click for JS Alert' });
    this.confirmButton = page.getByRole('button', { name: 'Click for JS Confirm' });
    this.promptButton = page.getByRole('button', { name: 'Click for JS Prompt' });
    this.result = page.locator('#result');
  }

  async goto(): Promise<void> {
    await this.page.goto('/javascript_alerts');
  }

  async acceptAlert(): Promise<void> {
    this.page.once('dialog', (dialog) => dialog.accept());
    await this.alertButton.click();
  }

  async acceptConfirm(): Promise<void> {
    this.page.once('dialog', (dialog) => dialog.accept());
    await this.confirmButton.click();
  }

  async dismissConfirm(): Promise<void> {
    this.page.once('dialog', (dialog) => dialog.dismiss());
    await this.confirmButton.click();
  }

  async acceptPrompt(text: string): Promise<void> {
    this.page.once('dialog', (dialog) => dialog.accept(text));
    await this.promptButton.click();
  }

  async dismissPrompt(): Promise<void> {
    this.page.once('dialog', (dialog) => dialog.dismiss());
    await this.promptButton.click();
  }

  async expectResult(expectedText: string): Promise<void> {
    await expect(this.result).toHaveText(expectedText);
  }
}
