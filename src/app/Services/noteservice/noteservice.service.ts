import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpServiceService } from '../HttpService/http-service.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {
    
   headers = new HttpHeaders({
     'Accept': 'application/json',
     'Authorization': 'Bearer '+localStorage.getItem('token')
  })
  // headers = new HttpHeaders()
  // .set('Authorization', 'Bearer '+localStorage.getItem('token')); 
  options = { headers: this.headers };

  constructor(private httpservice: HttpServiceService) { }

  baseurl = environment.baseUrl

  createNote(data: any) {
    return this.httpservice.post(`${this.baseurl}api/Note/addNotes`, data, true, this.options);
  }

  getNote(userId:any) {
    return this.httpservice.get(`${this.baseurl}api/Note/RetrieveNotes/${userId}`, true, this.options);
  }

  updateNote(data: any) {
    return this.httpservice.put(`${this.baseurl}api/Note/updateNotes`, data, true, this.options);
  }

  trashNote(noteId:any) {
    return this.httpservice.put(`${this.baseurl}api/Note/trashorUntrash?noteId=${noteId}`,null, true, this.options);
  }

  archiveNote(noteId:any) {
    return this.httpservice.put(`${this.baseurl}api/Note/archiveOrUnarchive?noteId=${noteId}`, null, true, this.options);
  }

  getTrash(userId:any) {
    return this.httpservice.get(`${this.baseurl}api/Note/getTrashNote/${userId}`, true, this.options);
  }

  getArchive(userId: any) {
    return this.httpservice.get(`${this.baseurl}api/Note/getArchiveNote?userId=${userId}`, true, this.options);
  }

}
