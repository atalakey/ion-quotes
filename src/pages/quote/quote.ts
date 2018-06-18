import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { SettingsService } from '../../services/settings';

/**
 * Generated class for the QuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  person: string;
  text: string;

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private viewCtrl: ViewController,
              private alertCtrl: AlertController,
              private settingsService: SettingsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotePage');
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');
  }

  onClose(unfavorite: boolean = false) {
    if(unfavorite) {
      console.log('hererrerer');
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
              this.viewCtrl.dismiss(unfavorite);
            }
          }
        ]
      });

      alert.present();
    }
    else {
      this.viewCtrl.dismiss(unfavorite);
    }
  }

  getBackground() {
    return this.settingsService.isAltBackgroundStatus() ? 'white' : 'yellow';
  }

}
