import { Component, Input, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/Services/noteservice/noteservice.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  @Input()
  card : any;

  constructor(private noteservice:NoteserviceService) { }

  ngOnInit(): void {
  }

  trashNote() {
    console.log(this.card);
      this.noteservice.trashNote(this.card.noteId).subscribe((res:any) => {
      console.log(res);
    }) 
  }

  archiveNote() {
    console.log(this.card);
    this.noteservice.archiveNote(this.card.noteId).subscribe((res: any) => {
      console.log(res);
    })
  }

}
