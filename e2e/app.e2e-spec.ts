import { RxheroescliPage } from './app.po';

describe('rxheroescli App', function() {
  let page: RxheroescliPage;

  beforeEach(() => {
    page = new RxheroescliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
