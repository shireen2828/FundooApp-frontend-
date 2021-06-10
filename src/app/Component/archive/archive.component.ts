import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/Services/noteservice/noteservice.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  notes: any= [];

  constructor(private noteservice:NoteserviceService) { }

  ngOnInit(): void {
    this.getArchive();
  }

  getArchive() {
    let id = localStorage.getItem('userId');
    this.noteservice.getArchive(id).subscribe((res:any) => {
      console.log(res);
      this.notes = res['data'];
    })
  }

}
