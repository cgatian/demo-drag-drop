import { DragDropPage } from './app.po';

describe('drag-drop App', () => {
  let page: DragDropPage;

  beforeEach(() => {
    page = new DragDropPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
