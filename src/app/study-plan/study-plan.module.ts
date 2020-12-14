import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { ShowStudyPlanComponent } from './show/show.component';
import { ElectiveComponent } from './elective/elective.component';
import { StructureComponent } from './structure/structure.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { StudyPlanService } from '../service/studyplan.service';
import { ShowListComponent } from './show-list/show-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShowStudyPlanComponent,
    StructureComponent,
    ShowListComponent,
    ElectiveComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    MatListModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule
  ],entryComponents: [
    ElectiveComponent
  ],
  providers: [StudyPlanService]
})
export class StudyPlanModule {}
