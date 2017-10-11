import { RecipesPage } from './app.po';

describe('recipes App', () => {
  let page: RecipesPage;

  beforeEach(() => {
    page = new RecipesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
