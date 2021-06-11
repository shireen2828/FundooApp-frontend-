import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteserviceService } from 'src/app/Services/noteservice/noteservice.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  title: any;
  description: any;
  noteId = localStorage.getItem('NoteId');

  @Output() update = new EventEmitter<any>();

  constructor(private noteservice: NoteserviceService, private dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {}

  ngOnInit(): void {
    this.title = this.data.note.title;
    this.description = this.data.note.description;
  }

  onClose() {
    this.dialogRef.close({ 'success': false });
  }

  updateNote() {
    let requestData = {
      NoteId: this.data.note.noteId,
      title: this.title,
      description: this.description,     
    }
    console.log(requestData );

    this.noteservice.updateNote(requestData).subscribe((result:any) => {
      console.log((result));
      if (result.status == true){
        this.dialogRef.close({ 'success': true });
        this.update.emit();
      }
     
    }, (error) => {
      console.log(error);
    });
  }
}
