import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoteserviceService } from 'src/app/Services/noteservice/noteservice.service';

@Component({
  selector: 'app-createnotes',
  templateUrl: './createnotes.component.html',
  styleUrls: ['./createnotes.component.scss']
})
export class CreatenotesComponent implements OnInit {
  noteForm!: FormGroup;
  userId = localStorage.getItem('userId');
  popup = false;

  @Input()
  clicked: any;

  @Output() sendEventToGetNote = new EventEmitter<any>();

  constructor(private noteservice: NoteserviceService) {}

  ngOnInit(): void {
    this.noteForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl('')
    });
  }

  onClickNote(){
    this.popup = !this.popup;
  }

  addNote(): void {
    let obj = {
      "title": this.noteForm.value.title,
      "description": this.noteForm.value.description,
      "UserId": 5
    }
    this.noteservice.createNote(obj).subscribe((res) => {
      console.log("Success", res);
      this.sendEventToGetNote.emit();
    })
  }

  // refresh(): void {
  //   window.location.reload();
  //  }
   }

  // createNote(){
  //   let data = {
  //      title:(<HTMLInputElement>document.getElementById("title"))?
  //      (<HTMLInputElement>document.getElementById("title")).value:'',
  //     description: (<HTMLInputElement>document.getElementById("note")).innerText.trim(),
  //     IsPin: this.pin
  //   }
  //   if (this.noteForm.value.title !== '' || this.noteForm.value.description !== ''){
  //     this.noteservice.addNote(data).subscribe((result) => {
  //       console.log((result));
  //     })
  //   }
  // }
