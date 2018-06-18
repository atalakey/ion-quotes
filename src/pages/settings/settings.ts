import { Component } from '@angular/core';
import { IonicPage, Toggle } from 'ionic-angular';

import { SettingsService } from '../../services/settings';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private settingService: SettingsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  onToggle(toggle: Toggle) {
    console.log(toggle);
    this.settingService.setaAltBackgroundStatus(toggle.checked);
  }

  checkAltBackground() {
    return this.settingService.isAltBackgroundStatus();
  }

}
