import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteserviceService } from 'src/app/Services/noteservice/noteservice.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  // title: any;
  // description: any;
  // id: any;
  // noteId = localStorage.getItem('noteId');
  notes: any;


  constructor(private noteservice: NoteserviceService) {}

  ngOnInit(): void {
  }

  updateNote() {
    // let requestData = {
    //   NoteId: 1,
    //   title: this.title,
    //   description: this.description,     
    // }
    console.log('Id', this.notes.NoteId );

    this.noteservice.updateNote(this.notes).subscribe((result:any) => {
      console.log((result));
    })

  }
}
