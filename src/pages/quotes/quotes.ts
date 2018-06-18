import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Quote } from '../../app/data/quote.interface';
import { QuotesService } from '../../services/quotes';

/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private alertCtrl: AlertController,
              private quoteService: QuotesService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesPage');
  }

  ngOnInit()
  {
    this.quoteGroup = this.navParams.data;
  }

  // Add elvic operator (?) in template to use this approach
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad QuotesPage');
  //   this.quoteGroup = this.navParams.data;
  // }

  onAddToFavorites(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add this quote to your favorites list?',
      buttons: [
        {
          text: 'No, i changed my mind!',
          role: 'cancel',
          handler: () => {
            console.log('No, i changed my mind! clicked');
          }
        },
        {
          text: 'Yes, go ahead',
          handler: () => {
            console.log('Yes, go ahead clicked');
            this.quoteService.addQuoteToFavorites(selectedQuote);
          }
        }
      ]
    });

    alert.present();
  }

  onRemoveFromFavorites(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Remove Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to remove this quote from your favorites list?',
      buttons: [
        {
          text: 'No, i changed my mind!',
          role: 'cancel',
          handler: () => {
            console.log('No, i changed my mind! clicked');
          }
        },
        {
          text: 'Yes, go ahead',
          handler: () => {
            console.log('Yes, go ahead clicked');
            this.quoteService.removeQuoteFromFavorites(selectedQuote);
          }
        }
      ]
    });

    alert.present();
  }

  isFavorite(quote: Quote) {
    return this.quoteService.isQuoteFavorite(quote);
  }

}
