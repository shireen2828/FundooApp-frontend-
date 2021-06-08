import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/Services/noteservice/noteservice.service';

@Component({
  selector: 'app-getnotes',
  templateUrl: './getnotes.component.html',
  styleUrls: ['./getnotes.component.scss']
})
export class GetnotesComponent implements OnInit {
  Notes: any[] = [];

  constructor( private noteservice: NoteserviceService) {}

  ngOnInit(): void {
    this.getNote();
  }

  getNote() {
    let id = localStorage.getItem('userId');
    this.noteservice.getNote(id).subscribe((res:any) => {
      console.log("Success", res['data'].data)
      this.Notes = res['data'].data;

    })
  }

  messageReceived() {
    console.log("Event called from take note");
    this.getNote();
  }

}
