import { Component, OnInit } from '@angular/core';
import { SocialActionProjectService } from '../../service/social-action-project.service';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { MatDialog } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SocialActionReviewComment } from 'src/app/model/social-action-review-comment.model';
import { SocialActionProject } from 'src/app/model/social-action-project.model';
import { InternalSocialActionCollaborator } from 'src/app/model/internal-social-action-collaborator.model';
import { ExternalSocialActionCollaborator } from 'src/app/model/external-social-action-collaborator.model';
import { UniversityBranch } from 'src/app/model/universitybranch.model';
import { Professor } from 'src/app/model/professor.model';
import { PartycipationType } from 'src/app/model/participation-type.mode';
import { ExternalParticipant } from 'src/app/model/external-participant.model';
import { Organization } from 'src/app/model/organization.model';
import { MyPopup } from '../popup/popup';
import { AuthenticationService } from 'src/app/service/account-service';



@Component({
  selector: 'app-fix-request',
  templateUrl: './fix-request.component.html',
  styleUrls: ['./fix-request.component.scss']
})
export class FixRequestComponent implements OnInit {

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
  public ERROR = -2;
  public SUCCSESSFUL = 2;

  branches: string[] = [
    'Paraiso',
    'Turrialba',
  ];


  constructor(private socialActionProjectService: SocialActionProjectService, private activatedRoute: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog, auten:AuthenticationService) {

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

  openDialog() {
    const dialogRef = this.dialog.open(ReviewCommentDialog, {
      data: {
        reviewComment: this.listReviewComments[this.listReviewComments.length-1]
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }


  Submit(){

    var response = this.socialActionProjectService.fixRequestPublication(this.getProject(), localStorage.getItem('currentUser'));

    if(response){
      this.requestCode = this.SUCCSESSFUL;
    }else{
      this.requestCode = this.ERROR;
    }

    this.openDialogFixRequest();

  }

  openDialogFixRequest(): void {
    const dialogRef = this.dialog.open(MyPopup, {
      data: {
        requestCode: this.requestCode
      }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  goToAnotherComponent(){

    this.router.navigate(['social-action-project/']).then( (e) => {
      if (e) {
        alert("El proyecto se ha enviado a revisión correctamente");
      } else {
        alert("Hubo un problema, intente de nuevo por favor.");
      }
    });

  }

  getProject(): SocialActionProject{

    var branch = new UniversityBranch(1, 'Paraiso');

    this.branch = branch;

    var internalCollaborators: InternalSocialActionCollaborator[] = new Array();

    var professor = new Professor(1, 'Julio', 'Segura', 'julio@ucr.ac.cr', 'BAH');

    var participationtype = new PartycipationType(1, 'Colaborativa');

    var internal = new InternalSocialActionCollaborator(professor, participationtype);

    internalCollaborators.push(internal);

    this.internalCollaborators = internalCollaborators;

    var organization = new Organization(1,'ICE','TI');

    var externalParticipant = new ExternalParticipant(1,'Carlos', 'Serrano', 'LIC', 'carlos@icr.ac.cr', organization);

    var externalCollaborators: ExternalSocialActionCollaborator[] = new Array();

    var external = new ExternalSocialActionCollaborator(externalParticipant, participationtype);

    externalCollaborators.push(external);

    this.externalCollaborators = externalCollaborators;

    this.publicationStatus = 'OnReview';

    this.visible = false;

    var socialActionProject = new SocialActionProject(
      this.code,
      this.title,
      this.description,
      this.startDate,
      this.endDate,
      this.active,
      this.visible,
      this.publicationStatus,
      this.internalCollaborators,
      this.externalCollaborators,
      this.listReviewComments,
      this.branch);

    return socialActionProject;

  }


}


@Component({
  selector: 'review-comment-dialog',
  templateUrl: 'review-comment-dialog.html',
  styleUrls: ['./fix-request.component.scss']
})
export class ReviewCommentDialog {

  socialActionReviewComment: SocialActionReviewComment;
  reviewDate: Date;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.socialActionReviewComment = this.data.reviewComment;
    this.reviewDate = new Date(this.socialActionReviewComment.reviewCommentDate);
  }

}
