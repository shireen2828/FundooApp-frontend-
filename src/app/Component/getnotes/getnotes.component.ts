import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/Services/noteservice/noteservice.service';

@Component({
  selector: 'app-getnotes',
  templateUrl: './getnotes.component.html',
  styleUrls: ['./getnotes.component.scss']
})
export class GetnotesComponent implements OnInit {
  Note: any;

  constructor( private noteservice: NoteserviceService) {}

  ngOnInit(): void {
    this.getNote();
  }

  getNote() {
    this.noteservice.getNote().subscribe((res:any) => {
      console.log("Success", res['data'].data)
      this.Note = res['data'].data;
    })

  }

}
