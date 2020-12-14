import {Component, OnInit, ViewChild, Inject} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { SocialActionProject } from 'src/app/model/social-action-project.model';
import { SocialActionProjectService } from '../../service/social-action-project.service';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UniversityBranch } from 'src/app/model/universitybranch.model';
import { InternalSocialActionCollaborator } from 'src/app/model/internal-social-action-collaborator.model';
import { Professor } from 'src/app/model/professor.model';
import { Router } from "@angular/router";
import { AuthenticationService } from 'src/app/service/account-service';



interface State {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-see-projects',
  templateUrl: './see-projects.component.html',
  styleUrls: ['./see-projects.component.scss']
})

export class SeeProjectsComponent implements OnInit {


  socialActionProjectService: SocialActionProjectService;
  displayedColumns: string[] = ['title', 'details'];

  dataSource = new MatTableDataSource<SocialActionProject>();

  projectsList:SocialActionProject[]=new Array<SocialActionProject>();
  tempProjectsList:SocialActionProject[]=new Array<SocialActionProject>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  selectedRow;
  socialActionProject: SocialActionProject;
  name: string;
  state: number;

  constructor(private socialProjectService: SocialActionProjectService, public dialog: MatDialog,
    private router: Router, auten:AuthenticationService) {

    /*auten.login('alvaro.menamonge@ucr.ac.cr', 'amm')
    .subscribe(
      resp => {
        localStorage.setItem("currentUser",resp.headers.get('Authorization'));




    });*/

    this.state=1;
    this.socialProjectService.showAllProjets(localStorage.getItem('currentUser')).subscribe((data: any[])=>{
      console.log(data);
      this.projectsList = data;
      this.dataSource= new MatTableDataSource(this.projectsList);
      this.dataSource.paginator = this.paginator;

    });


  }

  captureState(){
        this.tempProjectsList=[];
        if(this.state==2){
          for(let socialActionProject of this.projectsList){
            if(socialActionProject.publicationStatus=="OnReview"){
              this.tempProjectsList.push(socialActionProject);
              }
          }
        }else if(this.state==3){
          for(let socialActionProject of this.projectsList){
            if(socialActionProject.publicationStatus=="Approved"){
              this.tempProjectsList.push(socialActionProject);
              }
            }
        }else if(this.state==4){
          for(let socialActionProject of this.projectsList){
            if(socialActionProject.publicationStatus=="NeedToFix"){
              this.tempProjectsList.push(socialActionProject);
            }
          }
        }else if (this.state==1){
          for(let socialActionProject of this.projectsList){
            if(socialActionProject.publicationStatus=="NeedToFix" ||
            socialActionProject.publicationStatus=="Approved" ||
            socialActionProject.publicationStatus=="OnReview"){
              this.tempProjectsList.push(socialActionProject);
            }
          }

        }


        this.dataSource= new MatTableDataSource(this.tempProjectsList);
        this.dataSource.paginator= this. paginator;
  }

  ngOnInit() {

  }



sendProject(code: number): void{
  this.router.navigate(['social-action-project/projectDetails', code]);
  //console.log(code);
}


states: State[] = [
  {value: 1, viewValue: '--'},
  {value: 2, viewValue: 'Por revisar'},
  {value: 3, viewValue: 'Aprobados'},
  {value: 4, viewValue: 'Rechazados'}
];

}

