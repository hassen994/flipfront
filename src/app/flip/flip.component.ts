import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {PageFlip} from 'page-flip';
import {Observable} from "rxjs";
import {Pages} from "../reponseFile/pages";
import {FileUploadService} from "../services/file-upload.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-flip',
  templateUrl: './flip.component.html',
  styleUrls: ['./flip.component.css']
})
export class FlipComponent implements OnInit, AfterViewInit {

  // @ts-ignore
  @ViewChildren('pages') page: QueryList<Pages>;
  id: string ='';
  pageInfo?: Observable<any>;
  pages: Pages[] = [] ;
   pdf: string[] ;


  constructor(private uploadservice: FileUploadService,
              private route: ActivatedRoute,
              private router: Router,
              private ref: ElementRef
              ) {
        this.pdf = [];
  }



  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.pageInfo = this.uploadservice.getPages(this.id)


  }
  ngAfterViewInit(): void {

      this.page.changes.subscribe(()=>{
        // @ts-ignore
        const pageFlip = new PageFlip(document.getElementById('book'),{
          width: 465,
          height: 657,
        });
        pageFlip.loadFromHTML(document.querySelectorAll('.my-page'));

      })
    this.ngOnInit()
    }
}
