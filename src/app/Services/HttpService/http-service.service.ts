import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpclient: HttpClient) {}

  post(baseUrl: string, data:any, isHeaderRequired: any = false, headers = null){
    return this.httpclient.post(baseUrl, data, isHeaderRequired && headers)
  }
}
