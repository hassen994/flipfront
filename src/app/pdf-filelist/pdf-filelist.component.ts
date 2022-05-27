import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {FileUploadService} from "../services/file-upload.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pdf-filelist',
  templateUrl: './pdf-filelist.component.html',
  styleUrls: ['./pdf-filelist.component.css']
})
export class PdfFilelistComponent implements OnInit {
  fileInfo?: Observable<any>;

  constructor(private uploadService: FileUploadService,
              private router: Router) { }

  ngOnInit(): void {
    this.fileInfo = this.uploadService.getFiles();
  }

  navigate(id: any) {
    this.router.navigate(['/flipbook', id])
  }

}
