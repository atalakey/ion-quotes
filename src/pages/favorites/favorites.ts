import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../app/data/quote.interface';
import { QuotesService } from '../../services/quotes';

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
              private quoteService: QuotesService) {
  }

  ionViewWillEnter() {
    this.quotes = this.quoteService.getFavoriteQuote();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

}
