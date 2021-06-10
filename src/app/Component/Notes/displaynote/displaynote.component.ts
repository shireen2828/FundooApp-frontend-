import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from '../../update/update.component';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
   
  
  @Input()
  notesArray: any = [];

  @Output() updateSignal = new EventEmitter<string>();
 
  constructor(private dialog: MatDialog) { }
 
  
  ngOnInit(): void {
    this.notesArray;
  }

  openDialog(note: any) {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '500px',
      data: { note }
    });
    dialogRef.afterClosed().subscribe((res: any) => {
      if(res.Success)
      this.updateSignal.emit('update');

    })
  }


}
