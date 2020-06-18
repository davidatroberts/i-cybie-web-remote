import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { advancedActions, walkupActions } from '../actions';
import { ActionService } from '../action.service';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.css']
})
export class AdvancedComponent implements OnInit, OnDestroy {
  advancedActions = advancedActions;
  walkupActions = walkupActions;
  hasWalkUpCharger: boolean;
  subscription: any;

  constructor(
    private actionService: ActionService,
    private settingsService: SettingsService,
    private snackBar: MatSnackBar
  ) {
    this.hasWalkUpCharger = settingsService.getSettings().walkupCharger;
    this.subscription = settingsService.settingsChange.subscribe((data) => {
      this.hasWalkUpCharger = data.walkupCharger;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onActionClicked(action) {
    this.actionService.sendAction(action)
    .subscribe( {
      next: () => this.snackBar.open('Action Sent', '', {duration: 2000}),
      error: error => console.error('Error!', error)
    });
  }

}
