import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatPaginatorModule } from "@angular/material/paginator";
import { FiltherPipe } from './filther.pipe';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';



import { ShowComponent } from './show/show.component';
import { ShowSpecificComponent } from './show-specific/show-specific.component';
import { FilthersComponent } from './filthers/filthers.component';
import { ShowNewsPendingApproveComponent } from './show-news-pending-approve/show-news-pending-approve.component';
import { SaveRequestNewsComponent } from './save-request-news/save-request-news.component';




@NgModule({
  declarations: [ShowComponent, ShowSpecificComponent,
                 FilthersComponent, FiltherPipe,
                 ShowNewsPendingApproveComponent, SaveRequestNewsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    NgxDropzoneModule,
    MatSortModule,
    MatToolbarModule
  ]
})
export class NewsModule { }
