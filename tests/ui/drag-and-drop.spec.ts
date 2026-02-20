import { test } from '../../fixtures/base';

test.describe('Drag and Drop Page', () => {
  test('drag column A to column B swaps headers', async ({ dragAndDropPage }) => {
    await dragAndDropPage.goto();
    await dragAndDropPage.dragAToB();
    await dragAndDropPage.expectColumnAHeader('B');
    await dragAndDropPage.expectColumnBHeader('A');
  });
});
