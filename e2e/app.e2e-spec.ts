import { PageMarkPage } from './app.po';

describe('page-mark App', function() {
  let page: PageMarkPage;

  beforeEach(() => {
    page = new PageMarkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
