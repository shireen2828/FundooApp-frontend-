import { Component, OnInit, Input } from '@angular/core';
import { NoteserviceService } from '../../Services/noteservice/noteservice.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  search: any;
  notesList: any;
 

  constructor(private noteservice: NoteserviceService, private route: Router) {}

  ngOnInit(): void {
  }

}
