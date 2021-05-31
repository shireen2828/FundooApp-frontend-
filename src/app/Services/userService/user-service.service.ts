import { Injectable } from '@angular/core';
import { HttpServiceService } from '../HttpService/http-service.service';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpservice: HttpServiceService) { }

  baseurl = environment.baseUrl

  registration = ( data:any ) => {
    return this.httpservice.post(`${this.baseurl}api/register`, data)
  }

  login = (data:any) => {
    return this.httpservice.post(`${this.baseurl}api/loginEmployee`, data)
  }

  forget = (data:any) => {
    return this.httpservice.post(`${this.baseurl}api/forgetPassword?emailAdddress=` +data, null)
  }
}
