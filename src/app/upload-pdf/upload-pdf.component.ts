import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {FileUploadService} from '../services/file-upload.service';
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-upload-pdf',
  templateUrl: './upload-pdf.component.html',
  styleUrls: ['./upload-pdf.component.css']
})
export class UploadPdfComponent implements OnInit {
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfo?: Observable<any>;

  constructor(private uploadService: FileUploadService,
              private router: Router) { }

  ngOnInit(): void {

  }
  selectFile(event: any):void{
    this.selectedFiles = event.target.files;
  }
  upload(): void{
    this.progress = 0;
    if (this.selectedFiles){
      const file: File | null = this.selectedFiles.item(0);
      if (file){
        this.currentFile = file;
        this.uploadService.upload(this.currentFile).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress){
              this.progress = Math.round(100*event.loaded/event.total);
            } else if (event instanceof HttpResponse){
              this.message = event.body.message;

            }
          },
          (err: any) => {
            console.log(err);
            this.progress = 0;
            if (err.error() && err.error().message){
              this.message = err.error().message;
            }
            else {
              this.message = 'could not upload pdf file '
            }
            this.currentFile = undefined;
          }
        );

      }
      this.selectedFiles = undefined;
    }

  }
  showlist() {
    this.router.navigate(['/filelist'])
  }

}
