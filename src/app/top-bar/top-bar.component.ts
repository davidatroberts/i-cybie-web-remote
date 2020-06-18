import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { SettingsComponent } from '../settings/settings.component';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private settingsService: SettingsService) { }

  ngOnInit(): void {
  }

  onSettingsClicked(): void {
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
        }
      );
    });
  }

}
