import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/Services/noteservice/noteservice.service';

@Component({
  selector: 'app-getnotes',
  templateUrl: './getnotes.component.html',
  styleUrls: ['./getnotes.component.scss']
})
export class GetnotesComponent implements OnInit {
  NotesArray: any= [];

  constructor( private noteservice: NoteserviceService) {}

  clicked = false;

  ngOnInit(): void {
    this.getNote();
  }

  getNote() {
    let id = localStorage.getItem('userId');
    this.noteservice.getNote(id).subscribe((res:any) => {
      console.log("Success",res['data']);
      this.NotesArray = res['data'].reverse();

    })
  }

  messageReceived() {
    console.log("Event called from take note");
    this.getNote();
  }
  refreshAfterUpdation(event: any) {
    if (event === 'update') {
      console.log('refreshed');
      this.getNote();
    }
    else {
      console.log("update failure");
    }
  }

}
