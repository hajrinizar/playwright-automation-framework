import { test } from '../../fixtures/base';

test.describe('Nested Frames Page', () => {
  test('middle frame displays correct text', async ({ framesPage }) => {
    await framesPage.goto();
    await framesPage.expectTopFrameText('middle', 'MIDDLE');
  });

  test('left frame displays correct text', async ({ framesPage }) => {
    await framesPage.goto();
    await framesPage.expectTopFrameText('left', 'LEFT');
  });

  test('right frame displays correct text', async ({ framesPage }) => {
    await framesPage.goto();
    await framesPage.expectTopFrameText('right', 'RIGHT');
  });

  test('bottom frame displays correct text', async ({ framesPage }) => {
    await framesPage.goto();
    await framesPage.expectBottomFrameText('BOTTOM');
  });
});
