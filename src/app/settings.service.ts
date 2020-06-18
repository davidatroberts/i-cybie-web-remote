import { Injectable } from '@angular/core';

import { SettingsData } from './settings-interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settingsChange: Subject<SettingsData> = new Subject<SettingsData>();

  constructor() { }

  setSettings(data: SettingsData): void {
    localStorage.setItem('icybie_ip', data.ipAddress);
    localStorage.setItem('icybie_walkup_charger', data.walkupCharger.toString());
    this.settingsChange.next(data);
  }

  getSettings(): SettingsData {
    if ((localStorage.getItem('icybie_ip') === null) || (localStorage.getItem('icybie_walkup_charger') === null)) {
      return {
        ipAddress: '',
        walkupCharger: false
      };
    }

    return {
      ipAddress:  localStorage.getItem('icybie_ip'),
      walkupCharger: JSON.parse(localStorage.getItem('icybie_walkup_charger'))
    };
  }

  hasSettings(): boolean {
    return !(localStorage.getItem('icybie_ip') === null);
  }

}
