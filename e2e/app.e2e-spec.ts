import { DropdownPage } from './app.po';

describe('dropdown App', () => {
  let page: DropdownPage;

  beforeEach(() => {
    page = new DropdownPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
