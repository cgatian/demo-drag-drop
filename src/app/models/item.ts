export interface Item {
  type: string;
  modifiers: {
    health?: number;
    magic?: number;
    awesomeness?: number;
  };
}
