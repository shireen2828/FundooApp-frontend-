import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/Services/noteservice/noteservice.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  notes: any= [];
 

  constructor(private noteservice: NoteserviceService) { }

  ngOnInit(): void {
    this.getTrash();
  }

  getTrash() {
    let id = localStorage.getItem('userId');
    this.noteservice.getTrash(id).subscribe((res: any) => {
      console.log(res);
      this.notes = res['data'];
    })
  }


}
