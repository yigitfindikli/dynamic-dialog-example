import { Component, OnInit } from '@angular/core';
import { DialogConfig } from '../dialog/dialog-config';
import { DialogRef } from '../dialog/dialog-ref';

@Component({
  selector: 'app-inside-dialog',
  templateUrl: './inside-dialog.component.html',
  styleUrls: ['./inside-dialog.component.css']
})
export class InsideDialogComponent implements OnInit {

    constructor(public config: DialogConfig, public dialog:DialogRef) { }

    ngOnInit() {
    }

    onClose() {
        this.dialog.close('its closing.');
    }

}
