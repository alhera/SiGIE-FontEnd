import { Component, OnInit, Inject } from '@angular/core';
import { SocialActionProject } from 'src/app/model/social-action-project.model';
import { ActivatedRoute } from "@angular/router";
import { UniversityBranch } from 'src/app/model/universitybranch.model';
import { InternalSocialActionCollaborator } from 'src/app/model/internal-social-action-collaborator.model';
import { Professor } from 'src/app/model/professor.model';
import { PartycipationType } from 'src/app/model/participation-type.mode';
import { Organization } from 'src/app/model/organization.model';
import { ExternalParticipant } from 'src/app/model/external-participant.model';
import { ExternalSocialActionCollaborator } from 'src/app/model/external-social-action-collaborator.model';
import { SocialActionProjectService } from '../../service/social-action-project.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from "@angular/router";
import { RouterModule } from '@angular/router';
import { SocialActionReviewComment } from 'src/app/model/social-action-review-comment.model';
import { MyPopup } from '../popup/popup';
import { SeeExternalCollaborators } from './see-external-collaboratos/see-external-collaboratos';
import { SeeInternalCollaborators } from './see-internal-collaborators/see-internal-collaboratos';
import { AuthenticationService } from 'src/app/service/account-service';





@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  socialActionProject: SocialActionProject;

  code: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  active: boolean;
  visible: boolean;
  publicationStatus: string;
  internalCollaborators: InternalSocialActionCollaborator[];
  externalCollaborators: ExternalSocialActionCollaborator[];
  listReviewComments: SocialActionReviewComment[];
  branch: UniversityBranch;

    //popup variables
    message: string;
    requestCode: number;

    //VARIALBES ESTATICAS
    public ERROR = -3;
    public SUCCSESSFUL = 3;

  constructor(private socialActionProjectService: SocialActionProjectService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router,
    auten:AuthenticationService) {


      auten.login('alvaro.menamonge@ucr.ac.cr', 'amm')
    .subscribe(
      resp => {
        localStorage.setItem("currentUser",resp.headers.get('Authorization'))
    });


  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.code = params['code'];
    });
    this.socialActionProjectService.getByCode(this.code, localStorage.getItem('currentUser')).subscribe((data: SocialActionProject)=>{
      this.socialActionProject = data;

      this.title = this.socialActionProject.title;
      this.description = this.socialActionProject.description;
      this.startDate = new Date(this.socialActionProject.startDate);
      this.endDate = new Date(this.socialActionProject.endDate);
      this.active = this.socialActionProject.active;
      this.visible = this.socialActionProject.visible;
      this.publicationStatus = this.socialActionProject.publicationStatus;
      this.internalCollaborators = this.socialActionProject.internalCollaborators;
      this.externalCollaborators = this.socialActionProject.externalCollaborators;
      this.listReviewComments = this.socialActionProject.listReviewComments;
      this.branch = this.socialActionProject.branch;

    });

  }


  openDialog(): void {
    const dialogRef = this.dialog.open(OverviewDialog, {
      width: '600px',
      data: {
        code: this.code
      }
    });

  dialogRef.afterClosed().subscribe(result => {
    console.log(result);
    if(result){
      this.router.navigate(['social-action-project/seeProjects']);
    }
  });

  }

  openDialogApprove(): void {
    const dialogRef = this.dialog.open(MyPopup, {
      data: {
        requestCode: this.requestCode
      }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  submit(){
    this.socialActionProjectService.approve(this.code, localStorage.getItem('currentUser')).subscribe((data: Boolean)=>{
      var result = data;
      if(result){
        //alert("El proyecto ha sido aprobado");
        this.requestCode = this.SUCCSESSFUL;
        this.router.navigate(['social-action-project//seeProjects']);
      }else{
        this.requestCode = this.ERROR;
      }
      this.openDialogApprove();
    });;

  }

  externalCollaboratorsTable(): void {

    const dialogRef = this.dialog.open(SeeExternalCollaborators, {
      data: {
        externalCollaborators: this.externalCollaborators,
      }
    });

  }//external collaborators

  internalCollaboratorsTable(): void {

    const dialogRef = this.dialog.open(SeeInternalCollaborators, {
      data: {
        internalCollaborators: this.internalCollaborators,
      }
    });

  }//external collaborators


}


@Component({
  selector: 'overview-dialog',
  templateUrl: 'overview-dialog.html',
  styleUrls: ['./overview-dialog.scss']
})
export class OverviewDialog {

  code: number;
  reviewDate: Date;
  reviewComment: string;
  socialActionReviewComment: SocialActionReviewComment;


    constructor(
      private socialActionProjectService: SocialActionProjectService,
      public dialogRef: MatDialogRef<OverviewDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      auten:AuthenticationService) {

        auten.login('alvaro.menamonge@ucr.ac.cr', 'amm')
    .subscribe(
      resp => {
        localStorage.setItem("currentUser",resp.headers.get('Authorization'))
    });


      }

    onNoClick(): void {
      //this.dialogRef.close();
      this.dialogRef.disableClose = true;//disable default close operation
      this.dialogRef.backdropClick().subscribe(result => {
        this.dialogRef.close("PRUEBA");
      });
    }

    ngOnInit() {
      this.code = this.data.code;
    }

    submit(){
      this.reviewDate= new Date();
      this.socialActionReviewComment= new SocialActionReviewComment(0,this.reviewComment,this.reviewDate);
      this.onNoClick();
      this.socialActionProjectService.refuse(this.socialActionReviewComment,this.code,localStorage.getItem('currentUser'));

    }




}


