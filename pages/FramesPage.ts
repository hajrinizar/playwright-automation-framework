import { type Page, expect } from '@playwright/test';

/**
 * Page Object for the Nested Frames page (/nested_frames).
 * Demonstrates traversing nested frame hierarchies using chained frameLocators.
 */
export class FramesPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(): Promise<void> {
    await this.page.goto('/nested_frames');
  }

  /** Access a named sub-frame inside the top frameset (left, middle, right). */
  async expectTopFrameText(frameName: 'left' | 'middle' | 'right', text: string): Promise<void> {
    const topFrame = this.page.frameLocator('frame[name="frame-top"]');
    const innerFrame = topFrame.frameLocator(`frame[name="frame-${frameName}"]`);
    await expect(innerFrame.locator('body')).toContainText(text);
  }

  async expectBottomFrameText(text: string): Promise<void> {
    const bottomFrame = this.page.frameLocator('frame[name="frame-bottom"]');
    await expect(bottomFrame.locator('body')).toContainText(text);
  }
}
