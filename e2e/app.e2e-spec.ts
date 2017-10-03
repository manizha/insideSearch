import { DiscussionPage } from './app.po';

describe('Discussion App', () => {
  let page: DiscussionPage;

  beforeEach(() => {
    page = new DiscussionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
