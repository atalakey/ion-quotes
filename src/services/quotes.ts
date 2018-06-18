import { Quote } from "../app/data/quote.interface";

export class QuotesService {
  private favoriteQuotes: Quote[] = [];

  addQuoteToFavorites(quote: Quote): void {
    this.favoriteQuotes.push(quote);
    console.log(this.favoriteQuotes);
  }

  removeQuoteFromFavorites(quote: Quote): void {
    const position = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id === quote.id;
    });
    this.favoriteQuotes.splice(position, 1);
  }

  getFavoriteQuote(): Quote[] {
    return this.favoriteQuotes.slice();
  }
}