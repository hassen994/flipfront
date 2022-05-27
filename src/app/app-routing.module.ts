import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FlipComponent} from "./flip/flip.component";
import {UploadPdfComponent} from "./upload-pdf/upload-pdf.component";
import {PdfFilelistComponent} from "./pdf-filelist/pdf-filelist.component";
import {RetrievepdffileComponent} from "./retrievepdffile/retrievepdffile.component";

const routes: Routes = [
  {path: 'flipbook/:id', component: FlipComponent},
  {path: 'upload' , component: UploadPdfComponent},
  {path: '', redirectTo: 'upload' , pathMatch: 'full'},
  {path: 'filelist', component: PdfFilelistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
