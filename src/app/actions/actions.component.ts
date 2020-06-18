import { Component, OnInit } from '@angular/core';

import { actions } from '../actions';
import { guardActions } from '../actions';
import { directionActions } from '../actions';
import { ActionService } from '../action.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  actions = actions;
  guardActions = guardActions;
  directionActions = directionActions;

  constructor(
    private actionService: ActionService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  onActionClicked(action) {
    this.actionService.sendAction(action)
    .subscribe( {
      next: () => this.snackBar.open('Action Sent', '', {duration: 2000}),
      error: error => console.error('Error!', error)
    });
  }

  onUpArrowClicked() {
    this.actionService.sendAction(directionActions.forward);
  }

  onLeftArrowClicked() {
    this.actionService.sendAction(directionActions.left);
  }

  onRightArrowClicked() {
    this.actionService.sendAction(directionActions.right);
  }

  onStopClicked() {
    this.actionService.sendAction(directionActions.stop);
  }
}

