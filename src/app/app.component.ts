import { Component } from '@angular/core';
import { DialogService } from './dialog/dialog.service';
import { InsideDialogComponent } from './inside-dialog/inside-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'dynamic-dialog';
    constructor(public dialog: DialogService) {
    }
    show() {
        const ref =this.dialog.open(InsideDialogComponent, {data: { message: 'I m a dynamic component inside of a dialog!'}});
        ref.afterClosed.subscribe(result =>{
            console.log('Closing message:',result);
        })
    }
}
