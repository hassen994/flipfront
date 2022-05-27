import {Component, Input, OnInit} from '@angular/core';
import {Pages} from "../reponseFile/pages";
import {FileUploadService} from "../services/file-upload.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-retrievepdffile',
  templateUrl: './retrievepdffile.component.html',
  styleUrls: ['./retrievepdffile.component.css']
})
export class RetrievepdffileComponent implements OnInit {
  id: string ='';
  // @ts-ignore
  pageofPdf: Pages[];
  pdfSrc: string[] | undefined;
  constructor(private uploadservice: FileUploadService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.uploadservice.getPages(this.id).subscribe((data) => {
      this.pageofPdf = data;
      console.log(data);
      this.pdfSrc = this.pageofPdf.map(a => a.url);

    })

  }

}
