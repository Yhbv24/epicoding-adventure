import { EpicodingAdventurePage } from './app.po';

describe('epicoding-adventure App', () => {
  let page: EpicodingAdventurePage;

  beforeEach(() => {
    page = new EpicodingAdventurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
