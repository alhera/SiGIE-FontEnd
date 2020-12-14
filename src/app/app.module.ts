import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';


//para las imágenes
import { ImageFormatterComponent } from "./ImageFormatterComponent";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigieToolbarComponent } from './sigie-toolbar/sigie-toolbar.component';
import { DocentesModule } from './docentes/docentes.module';

//Social Action Project
import { SocialActionProjectModule } from './social-action-project/social-action-project.module';
import { SocialActionProjectService } from './service/social-action-project.service';
import { ReviewCommentDialog } from './social-action-project/fix-request/fix-request.component';
import { OverviewDialog } from './social-action-project/project-details/project-details.component';
import { MyPopup } from './social-action-project/popup/popup'
import { InternalCollaboratorsSearchModal } from './social-action-project/send-request/modal-search-internal-collaborators/modal-search-internal-collaborator'
import { ExternalCollaboratorsSearchModal } from  './social-action-project/send-request/modal-search-external-collaborators/modal-search-external-collaborator'
import { SocialActionCollaboratorService } from './service/social-action-collaborator.service';
import { SeeExternalCollaborators } from './social-action-project/project-details/see-external-collaboratos/see-external-collaboratos'
import { SeeInternalCollaborators } from './social-action-project/project-details/see-internal-collaborators/see-internal-collaboratos'

//Angular Material Modules
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule} from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';


//SIGIE Modules
import { NewsModule } from "./news/news.module";
import { SigieHeaderComponent } from './sigie-header/sigie-header.component';
import { SigieNavbarComponent } from './sigie-navbar/sigie-navbar.component';
import { ServiceModule } from "./service/service.module";
import { SigieFooterComponent } from './sigie-footer/sigie-footer.component';
import { EventModule } from "./event/event.module";
import { StudyPlanModule } from './study-plan/study-plan.module';
import { AuthModule } from './auth/auth.module';
import {ElectiveComponent} from './study-plan/elective/elective.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageFormatterComponent,
    SigieHeaderComponent,
    SigieToolbarComponent,
    ReviewCommentDialog,
    OverviewDialog,
    MyPopup,
    InternalCollaboratorsSearchModal,
    ExternalCollaboratorsSearchModal,
    SeeInternalCollaborators,
    SeeExternalCollaborators,
    SigieNavbarComponent,
    SigieFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([ImageFormatterComponent]),
    BrowserAnimationsModule,
    MatToolbarModule,MatCardModule,DocentesModule,
    SocialActionProjectModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    HttpClientModule,
    MatButtonModule,
    NewsModule,
    EventModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSelectModule,
    MatMenuModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    AuthModule,
    BrowserModule,
    AgGridModule.withComponents([ImageFormatterComponent]),
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    HttpClientModule,
    ServiceModule,
    MatMenuModule,
    StudyPlanModule
  ],
  providers: [SocialActionProjectService, SocialActionCollaboratorService],
  bootstrap: [AppComponent],
  entryComponents: [
    ReviewCommentDialog,
    OverviewDialog,
    MyPopup,
    InternalCollaboratorsSearchModal,
    ExternalCollaboratorsSearchModal,
    SeeExternalCollaborators,
    SeeInternalCollaborators
  ]
})
export class AppModule { }
