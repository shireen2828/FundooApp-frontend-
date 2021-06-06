import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoteserviceService } from 'src/app/Services/noteservice/noteservice.service';

@Component({
  selector: 'app-createnotes',
  templateUrl: './createnotes.component.html',
  styleUrls: ['./createnotes.component.scss']
})
export class CreatenotesComponent implements OnInit {
  noteForm!: FormGroup;
  title: any;
  description: any;
  colour: any;
  popup = false;

  constructor(private noteservice: NoteserviceService) {}

  ngOnInit(): void {
    this.noteForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      colour: new FormControl('')
    });
  }

  onClickNote(){
    this.popup = !this.popup;
  }

  // onReturn(){
  //   console.log(this.noteForm);
  //   if (this.noteForm.invalid){
  //     console.log(this.noteForm);
  //     return;
  //   }
    // // if (this.noteForm.value.title !== '' || this.noteForm.value.description !== '') {
    //   this.noteservice.createNote(this.noteForm.value).subscribe((data:any) => {
    //     this.popup = !this.popup;
    //   });
    //}
  //   this.popup = !this.popup;
  //   this.noteForm.reset();
  // }

  addNote(): void {
    let obj = {
      "title": this.title,
      "description": this.description,
      "colour": this.colour
    }
    this.noteservice.createNote(obj).subscribe((res) => {
      console.log("Success", res);
    })

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

}
}
