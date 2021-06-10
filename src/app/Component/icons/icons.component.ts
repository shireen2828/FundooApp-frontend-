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

  @Input()NotesArray: any= [];

  @Input()
  isTrash: any

  constructor(private noteservice:NoteserviceService) { }

  ngOnInit(): void {
    (this.NotesArray);
  }

  deleteNote() {
    console.log(this.card)
    let obj = {
      noteIdList: [this.card.noteId]
    };
    console.log(obj);

    let Id = localStorage.getItem('noteId')
    this.noteservice.deleteNote(Id, obj).subscribe((result:any) => {
      console.log(result['data']);
    })
  }

  trashNote() {
    let id = localStorage.getItem('userId')
    console.log(id);
    let data = {
      noteIdList: [this.card.noteId],
      isTrash: true
    };
    console.log(data);
      this.noteservice.trashNote(data, id).subscribe((res:any) => {
        console.log(res['data']);
      })
   
  }

}
