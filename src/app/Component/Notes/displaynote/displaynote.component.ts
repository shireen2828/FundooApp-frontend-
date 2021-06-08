import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
  direction = 'row';
  @Input()
  notesArray: any[] = [];
 
  constructor() { }
 
  
  ngOnInit(): void {
    console.log(this.notesArray);
  }

  change (flag: boolean) {
    if (flag) {
      this.direction = 'column';
    } else {
      this.direction = 'row';
    }
  }
}
