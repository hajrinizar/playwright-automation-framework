import { test } from '../../fixtures/base';

const users = [
  { index: 0, name: 'user1' },
  { index: 1, name: 'user2' },
  { index: 2, name: 'user3' },
];

test.describe('Hovers Page', () => {
  for (const { index, name } of users) {
    test(`hovering over figure ${index + 1} reveals ${name}`, async ({ hoverPage }) => {
      await hoverPage.goto();
      await hoverPage.hoverOverFigure(index);
      await hoverPage.expectCaptionVisible(index, name);
    });
  }
});
