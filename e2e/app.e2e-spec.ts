import { StratEntPage } from './app.po';

describe('strat-ent App', () => {
  let page: StratEntPage;

  beforeEach(() => {
    page = new StratEntPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
