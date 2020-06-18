import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { TopBarComponent } from './top-bar/top-bar.component';
import { TabsComponent } from './tabs/tabs.component';
import { ActionsComponent } from './actions/actions.component';
import { TricksComponent } from './tricks/tricks.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { SettingsComponent } from './settings/settings.component';

import { CookieService } from 'ngx-cookie-service';
import { ActionService } from './action.service';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TabsComponent,
    ActionsComponent,
    TricksComponent,
    AdvancedComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatTabsModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatSlideToggleModule
  ],
  providers: [CookieService, ActionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
