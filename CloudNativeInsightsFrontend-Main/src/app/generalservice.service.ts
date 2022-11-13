import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GeneralserviceService {

  constructor(private http: HttpClient) { }
api="https://localhost:3080"

  getdatafromdbforcluster ()     
{    
  return this.http.get<any>(this.api + "/getdatafromdb")   
}
}
