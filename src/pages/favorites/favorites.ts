import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { QuotePage } from '../quote/quote';
import { QuotesService } from '../../services/quotes';
import { Quote } from '../../app/data/quote.interface';

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private quoteService: QuotesService,
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
          this.onRemoveFromFavorit(quote);
        }
      });
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quoteService.removeQuoteFromFavorites(quote);
    this.quotes = this.quoteService.getFavoriteQuote();
  }

}
