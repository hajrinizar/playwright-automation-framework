import { type Locator, type Page, expect } from '@playwright/test';

/**
 * Page Object for the Dynamic Loading pages (/dynamic_loading).
 * Handles asynchronously rendered content triggered by user interaction.
 */
export class DynamicLoadingPage {
  private readonly page: Page;
  private readonly startButton: Locator;
  private readonly finishText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.startButton = page.getByRole('button', { name: 'Start' });
    this.finishText = page.locator('#finish');
  }

  async goto(example: 1 | 2): Promise<void> {
    await this.page.goto(`/dynamic_loading/${example}`);
  }

  async clickStart(): Promise<void> {
    await this.startButton.click();
  }

  /** Extended timeout accounts for the ~5s loading spinner. */
  async expectFinishText(text: string, timeout = 10_000): Promise<void> {
    await expect(this.finishText).toHaveText(text, { timeout });
  }

  async expectFinishHidden(): Promise<void> {
    await expect(this.finishText).toBeHidden();
  }
}
