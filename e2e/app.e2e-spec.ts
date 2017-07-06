import { NgNewsPage } from './app.po';

describe('ng-news App', () => {
  let page: NgNewsPage;

  beforeEach(() => {
    page = new NgNewsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
