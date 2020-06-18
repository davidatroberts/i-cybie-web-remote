import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { SettingsData } from '../settings-interface';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SettingsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SettingsData
  ) { }

  ngOnInit(): void {

  }

  onOKClick(): void {
    this.dialogRef.close({
      ipAddress: this.data.ipAddress,
      walkupCharger: this.data.walkupCharger
      }
    );
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
