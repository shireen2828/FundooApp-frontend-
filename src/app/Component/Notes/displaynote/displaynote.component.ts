import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
  @Input() notesList:any;
  title! : string;
  description!: string;
  colour!: string;
 
  constructor() { }
 
  
  ngOnInit(): void {
  }

}
