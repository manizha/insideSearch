import { SupportPortalPage } from './app.po';

describe('support-portal App', () => {
  let page: SupportPortalPage;

  beforeEach(() => {
    page = new SupportPortalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
