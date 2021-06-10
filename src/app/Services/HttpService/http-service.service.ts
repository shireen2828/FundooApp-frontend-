import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpclient: HttpClient) {}

  post(baseUrl: string, data:any, isHeaderRequired: any = false, headers:any = null){
    return this.httpclient.post(baseUrl, data, isHeaderRequired && headers)
  }

  get(baseUrl: string, isHeaderRequired: any = false, headers:any = null){
    return this.httpclient.get(baseUrl, isHeaderRequired && headers)
  }

  put(baseUrl: string, data:any, isHeaderRequired: any, headers:any = null){
    return this.httpclient.put(baseUrl, data, isHeaderRequired && headers)
  }

  delete(baseUrl: string, isHeaderRequired: any = false, headers:any = null){
    return this.httpclient.delete(baseUrl, isHeaderRequired && headers)
  }
}
