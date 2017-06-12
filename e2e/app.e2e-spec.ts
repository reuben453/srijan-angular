import { CliTestPage } from './app.po';

describe('cli-test App', () => {
  let page: CliTestPage;

  beforeEach(() => {
    page = new CliTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
