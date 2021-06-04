import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpServiceService } from '../HttpService/http-service.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {
  headers = new HttpHeaders()
  .set('Authorization', 'Bearer '+localStorage.getItem('token')); 
  options = { headers: this.headers };

  title: any;
  description: any;
  
  private subject = new Subject<any>();

  sendMessage(message: string){
    this.subject.next({ text: message });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  constructor(private httpservice: HttpServiceService) { }

  baseurl = environment.baseUrl

  // addNote(data: any) {
  //   console.log(" data in user services ", data );
  //   return this.httpservice.post(`${this.baseurl}api/Note/addNotes`, data, this.options);
  // }

  createNote(note:any): Observable<any> {
    console.log(localStorage.getItem('token'));
    return this.httpservice.post(`${this.baseurl}api/Note/addNotes`, this.options)
    // { headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
  }
}
