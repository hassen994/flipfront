import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlipComponent } from './flip/flip.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { FlipBookModule } from '@labsforge/flipbook';
import {HttpClientModule} from "@angular/common/http";
import { UploadPdfComponent } from './upload-pdf/upload-pdf.component';
import {FileUploadService} from "./services/file-upload.service";
import { PdfFilelistComponent } from './pdf-filelist/pdf-filelist.component';
import { RetrievepdffileComponent } from './retrievepdffile/retrievepdffile.component';

@NgModule({
  declarations: [
    AppComponent,
    FlipComponent,
    UploadPdfComponent,
    PdfFilelistComponent,
    RetrievepdffileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule,
    FontAwesomeModule,
    NgxExtendedPdfViewerModule,
    FlipBookModule,
    HttpClientModule
  ],
  providers: [FileUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
