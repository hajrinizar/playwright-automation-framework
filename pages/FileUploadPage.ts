import { type Locator, type Page, expect } from '@playwright/test';

/** Page Object for the File Upload page (/upload). */
export class FileUploadPage {
  private readonly page: Page;
  private readonly fileInput: Locator;
  private readonly uploadButton: Locator;
  private readonly uploadedFiles: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fileInput = page.locator('#file-upload');
    this.uploadButton = page.locator('#file-submit');
    this.uploadedFiles = page.locator('#uploaded-files');
  }

  async goto(): Promise<void> {
    await this.page.goto('/upload');
  }

  async uploadFile(filePath: string): Promise<void> {
    await this.fileInput.setInputFiles(filePath);
    await this.uploadButton.click();
  }

  async expectUploadedFileName(fileName: string): Promise<void> {
    await expect(this.uploadedFiles).toHaveText(fileName);
  }
}
