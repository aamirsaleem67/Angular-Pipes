import { ServicesAndDIPage } from './app.po';

describe('services-and-di App', () => {
  let page: ServicesAndDIPage;

  beforeEach(() => {
    page = new ServicesAndDIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
