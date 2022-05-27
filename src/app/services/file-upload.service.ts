import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";
import {Pages} from "../reponseFile/pages";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private baseUrl = 'http://localhost:8083/';
  private url: string[] = [];

  private page: Pages[] = [];

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>>{
    const formData: FormData = new FormData();
    formData.append('file',file);
    const req = new HttpRequest('POST',this.baseUrl + 'upload',formData ,{
      reportProgress: true,
      responseType: "json"
    });
    return this.http.request(req);
  }
  getFiles(): Observable<any>{
    return this.http.get(this.baseUrl + 'files');
  }
  getPages(id: string): Observable<any>{
    return this.http.get(this.baseUrl + 'pages/' + id);
  }
  urlList(id: string): string[]{
    this.getPages(id).subscribe(data =>{
      this.page = data;

    })
    return [];
  }
}