import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';

import { QuotePage } from '../quote/quote';
import { QuotesService } from '../../services/quotes';
import { Quote } from '../../app/data/quote.interface';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];

  constructor(private quoteService: QuotesService,
              private modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter FavoritesPage');
    this.quotes = this.quoteService.getFavoriteQuote();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  onViewQuote(quote: Quote) {
      const modal = this.modalCtrl.create(QuotePage, quote);
      modal.present();
      modal.onDidDismiss((unfavorite: boolean) => {
        if(unfavorite) {
          this.onRemoveFromFavorites(quote);
        }
      });
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quoteService.removeQuoteFromFavorites(quote);
    this.quotes = this.quoteService.getFavoriteQuote();
  }

}
