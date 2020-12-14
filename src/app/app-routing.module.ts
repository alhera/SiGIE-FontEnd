// <<<<<<< HEAD
// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
//
// //modules
// import { ShowComponent as ShowNewsComponent } from "./news/show/show.component";
// import { AppComponent } from './app.component';
// import {ShowStudyPlanComponent} from './study-plan/show/show.component';
//
//
// const routes: Routes = [
//   {
//     path: "news/show",
//     component: ShowNewsComponent
//   },
//   {
//     path: 'study-plan/show',
//     component: ShowStudyPlanComponent
//   }
// ];
//
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
// =======
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PerfilDocenteComponent} from './docentes/perfil-docente/perfil-docente.component';
import  {SeeProjectsComponent} from './social-action-project/see-projects/see-projects.component';
import  {SendRequestComponent} from './social-action-project/send-request/send-request.component';
import { FixRequestComponent } from './social-action-project/fix-request/fix-request.component';
import { ProjectDetailsComponent } from './social-action-project/project-details/project-details.component';


//modules
import { ShowComponent as ShowNewsComponent } from "./news/show/show.component";
import { ShowSpecificComponent } from "./news/show-specific/show-specific.component";
import { ShowComponent as ShowEventComponent } from "./event/show/show.component";
import { DetailsComponent as DetailsEventComponent } from "./event/details/details.component";
import { ShowNewsPendingApproveComponent } from './news/show-news-pending-approve/show-news-pending-approve.component';
import { SaveRequestNewsComponent } from './news/save-request-news/save-request-news.component';
import {ShowStudyPlanComponent} from './study-plan/show/show.component';

import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
  { path: "news/show", component: ShowNewsComponent },
  { path: "news/show/:id", component: ShowSpecificComponent },
  { path: "events/show", component: ShowEventComponent},
  { path: "news/show", component: ShowNewsComponent },
  { path: "news/show-news-pending-approve", component: ShowNewsPendingApproveComponent },
  { path: "news/save-request-news", component: SaveRequestNewsComponent },
  { path: 'docentes', component: PerfilDocenteComponent },
  { path: 'social-action-project/sendRequest', component: SendRequestComponent },
  { path: 'social-action-project/seeProjects', component: SeeProjectsComponent },
  { path: 'social-action-project/fixRequest/:code', component: FixRequestComponent},
  { path: 'social-action-project/projectDetails/:code', component: ProjectDetailsComponent },
  { path: 'news/show', component: ShowNewsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'study-plan/show', component: ShowStudyPlanComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// >>>>>>> estructura-angular
