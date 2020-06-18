import { Component, OnInit } from '@angular/core';

import { trickActions } from '../actions';
import { trickGuides } from '../trick-guides';
import { ActionService } from '../action.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tricks',
  templateUrl: './tricks.component.html',
  styleUrls: ['./tricks.component.css']
})
export class TricksComponent implements OnInit {
  trickActions = trickActions;
  trickGuides = trickGuides;

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
}
