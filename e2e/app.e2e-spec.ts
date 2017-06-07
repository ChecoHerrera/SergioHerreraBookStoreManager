import { SergioHerreraBookStoreManagerPage } from './app.po';

describe('sergio-herrera-book-store-manager App', () => {
  let page: SergioHerreraBookStoreManagerPage;

  beforeEach(() => {
    page = new SergioHerreraBookStoreManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
