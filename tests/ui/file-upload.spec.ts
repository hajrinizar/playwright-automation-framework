import { test } from '../../fixtures/base';
import path from 'node:path';

test.describe('File Upload Page', () => {
  test('upload a file successfully', async ({ fileUploadPage }) => {
    await fileUploadPage.goto();

    const filePath = path.resolve('package.json');
    await fileUploadPage.uploadFile(filePath);
    await fileUploadPage.expectUploadedFileName('package.json');
  });
});
