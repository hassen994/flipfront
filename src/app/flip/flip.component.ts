import {Component, OnInit} from '@angular/core';
import {PageFlip} from 'page-flip';
import * as $ from 'jquery';
import {Observable} from "rxjs";
import {Pages} from "../reponseFile/pages";
import {FileUploadService} from "../services/file-upload.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-flip',
  templateUrl: './flip.component.html',
  styleUrls: ['./flip.component.css']
})
export class FlipComponent implements OnInit {
  id: string ='';
  pageInfo?: Observable<any>;
  pages: Pages[] = [] ;
   pdf: string[] ;


  constructor(private uploadservice: FileUploadService,
              private route: ActivatedRoute) {
        this.pdf = [];
  }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.uploadservice.getPages(this.id).subscribe(data => {
      this.pages = data;
      this.pdf = this.pages.map(a => a.url);
      console.log(this.pdf)
    })

      // @ts-ignore
      const pageFlip = new PageFlip(document.getElementById('book'),{
        width: 465,
        height: 657,
      });
      pageFlip.loadFromImages(['http://localhost:8083/images/917069d8-978a-4f30-8b09-b659fbe20d63', 'http://localhost:8083/images/96394a8b-3a98-4959-bcbb-5bc4fd0cf934', 'http://localhost:8083/images/948cbc9b-83c3-4055-b303-df43e11b6ce0', 'http://localhost:8083/images/0fb13bdb-7d80-482b-b588-fd3b7559fa75', 'http://localhost:8083/images/e8bc3f17-dccd-414e-ad82-87cf97dcfc9f', 'http://localhost:8083/images/c597ff48-9ac8-4dc0-984d-679f5e039122', 'http://localhost:8083/images/62423c0c-15f1-479c-8371-5563f1801247', 'http://localhost:8083/images/c7012ed7-ef5e-450d-b439-e38da96392db', 'http://localhost:8083/images/f3a552d1-3a2b-45ee-b5b6-b9afa2a0c613', 'http://localhost:8083/images/dc609f27-a2a2-45f6-b47f-de51bd74dedf', 'http://localhost:8083/images/b216943f-cb9f-475e-b746-246cc80821ce', 'http://localhost:8083/images/ee86f925-790e-460d-9ed0-0324db3d33bd', 'http://localhost:8083/images/15f36d16-03e0-415c-a2e7-c08497ae7de7', 'http://localhost:8083/images/7c753da9-aad3-4f20-ad3a-604a0e433c42', 'http://localhost:8083/images/5e616c24-cb18-40a7-a0db-9e09a7759f35', 'http://localhost:8083/images/6c4b7743-80e5-4853-8958-f98a9e68d52a', 'http://localhost:8083/images/7fce1e19-7e32-4905-8f52-59dc9fdef6b4', 'http://localhost:8083/images/dfc071f8-98aa-4e2c-afe9-22b0568324cd', 'http://localhost:8083/images/99f5aa23-a385-43ed-8722-ff5df1ea27b2', 'http://localhost:8083/images/1fb1cdca-69d0-43e0-afc6-74db4e4c45a7', 'http://localhost:8083/images/dea05034-3c83-4ac7-b65d-9d031fb8e7f8', 'http://localhost:8083/images/a0163571-5438-4827-90c3-7ffac2d7e217', 'http://localhost:8083/images/4718c67b-34a6-4687-8087-6da0156aa928', 'http://localhost:8083/images/4b45f487-0ff4-4b61-adcd-eea098280104']);


  }

}
