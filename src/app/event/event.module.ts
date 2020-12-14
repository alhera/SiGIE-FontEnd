import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowComponent } from '../event/show/show.component';

import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule} from '@angular/material/select';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from "@angular/router";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [ShowComponent, DetailsComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSelectModule,
    ToastrModule.forRoot(),
    RouterModule.forChild([
      {path:'event-details', component:DetailsComponent}])    
  ]
})
export class EventModule { }
