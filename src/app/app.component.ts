import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { SettingsComponent } from './settings/settings.component';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'icybie';

  constructor(
    public dialog: MatDialog,
    private settingsService: SettingsService) {}

  ngOnInit(): void {
    if (!this.settingsService.hasSettings()) {
      this.openDialog();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SettingsComponent, {
      width: '250px',
      data: this.settingsService.getSettings()
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this.settingsService.setSettings({
        ipAddress: result.ipAddress,
        walkupCharger: result.walkupCharger
      });
    });
  }
}
