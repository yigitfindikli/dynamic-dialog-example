import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InsideDialogComponent } from './inside-dialog/inside-dialog.component';
import { DialogModule } from './dialog/dialog.module';

@NgModule({
  declarations: [
    AppComponent,
    InsideDialogComponent
  ],
  imports: [
    BrowserModule,
    DialogModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [InsideDialogComponent]
})
export class AppModule { }
