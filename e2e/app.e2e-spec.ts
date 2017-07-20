import { AngularRocksPage } from './app.po';

describe('angular-rocks App', () => {
  let page: AngularRocksPage;

  beforeEach(() => {
    page = new AngularRocksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
