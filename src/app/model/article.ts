export class Article {
  constructor(
    public name: string,
    public imageUrl: string,
    public price: number,
    public isOnSales: boolean,
    public quantityInChart: number) {}
}
