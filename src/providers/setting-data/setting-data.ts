import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class SettingDataProvider {

  // DATA
  settingData: any;

  constructor(private storage: Storage) {
    this.settingData = this.get().then((data) => {
      this.settingData = data;
    });
  }

  // RETRIEVE DATA
  get(): any {
    return this.storage.get('_settings');
  }

  // SAVE
  save(data): void{
    let newData = JSON.stringify(data);
    this.storage.set('_settings', newData);
  }

} // EOF
