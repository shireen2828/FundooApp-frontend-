import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/Services/noteservice/noteservice.service';
import { DataserviceService } from 'src/app/Services/DataService/dataservice.service';

@Component({
  selector: 'app-getnotes',
  templateUrl: './getnotes.component.html',
  styleUrls: ['./getnotes.component.scss']
})
export class GetnotesComponent implements OnInit {
  NotesArray: any= [];

  constructor( private noteservice: NoteserviceService, private dataservice: DataserviceService) {}

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

  getNotes(event: any) {
    console.log(event);
    this.getNote();
  }

  updateNotes(event: any) {
    console.log(event);
    this.getNote();
  }

//   messageReceived($event: any) {
//     console.log("Event called");
//     this.getNote();
//   }
//   refreshAfterUpdation(event: any) {
//     if (event === 'updateNotes') {
//       console.log('refreshed');
//       this.getNote();
//     }
//     else {
//       console.log("update failure");
//     }
//   }

//   refresh(): void {
//     window.location.reload();
// }

}
