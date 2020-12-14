
import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { SocialActionProject } from 'src/app/model/social-action-project.model'
import { UniversityBranch } from 'src/app/model/universitybranch.model';
import { InternalSocialActionCollaborator } from 'src/app/model/internal-social-action-collaborator.model';
import { ExternalSocialActionCollaborator } from 'src/app/model/external-social-action-collaborator.model';
import { SocialActionReviewComment } from 'src/app/model/social-action-review-comment.model';
import { Professor } from 'src/app/model/professor.model';
import { PartycipationType } from 'src/app/model/participation-type.mode';
import { Organization } from 'src/app/model/organization.model';
import { ExternalParticipant } from 'src/app/model/external-participant.model';
import { ActivatedRoute, Router } from '@angular/router';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MyPopup } from '../popup/popup';
import { SocialActionProjectService } from '../../service/social-action-project.service';
import { ExternalCollaboratorsSearchModal } from './modal-search-external-collaborators/modal-search-external-collaborator';
import { InternalCollaboratorsSearchModal } from './modal-search-internal-collaborators/modal-search-internal-collaborator';
import { AuthenticationService } from 'src/app/service/account-service';



@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.scss']
})
export class SendRequestComponent implements OnInit {

  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  internalCollaborators: InternalSocialActionCollaborator[] = new Array<InternalSocialActionCollaborator>();
  externalCollaborators: ExternalSocialActionCollaborator[] = new Array<ExternalSocialActionCollaborator>();

  idsProfessors: number[] = new Array<number>();
  idsExternalCollaborators: number[] = new Array<number>();

  professors:Professor[]=new Array<Professor>();
  externals: ExternalSocialActionCollaborator[] = new Array<ExternalSocialActionCollaborator>();

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Paraiso'},
    {value: 'pizza-1', viewValue: 'Turrialba'},

  ];

  //popup variables
  message: string;
  requestCode: number;

  //VARIALBES ESTATICAS
  public ERROR = -1;
  public SUCCSESSFUL = 1;

  constructor(private socialActionProjectService: SocialActionProjectService,
    public dialog: MatDialog, auten:AuthenticationService) {

      auten.login('alvaro.menamonge@ucr.ac.cr', 'amm').subscribe(
      resp => {
        localStorage.setItem("currentUser",resp.headers.get('Authorization'))
    });
  }

  ngOnInit(): void {}

  Submit(){

    var branch = new UniversityBranch(1, 'Paraiso');

    //TODO cambiar null por la lista de comentarios
    var socialActionProject = new SocialActionProject(1, this.title, this.description, this.startDate, this.endDate, false, false, 'OnReview', this.internalCollaborators, this.externalCollaborators, null, branch);

    var response = this.socialActionProjectService.requestPublication(socialActionProject, localStorage.getItem('currentUser'));

    if(response){
      this.requestCode = this.SUCCSESSFUL;
    }else{
      this.requestCode = this.ERROR;
    }

    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MyPopup, {
      data: {
        requestCode: this.requestCode
      }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }



  internalCollaboratorsTable(): void {
    const dialogRef = this.dialog.open(InternalCollaboratorsSearchModal, {
      data: {
        idsProfessors: this.idsProfessors,
        professors: this.professors
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      if(!result){return;}

      result.idsProfessors.forEach(element => {

        console.log(element+"\n");

        var professorId = element;

        var professor = new Professor(professorId,'','','','');

        var participationtype = new PartycipationType(1, 'Colaborativa');

        var internalCollaborator = new InternalSocialActionCollaborator(professor, participationtype);

        this.internalCollaborators.push(internalCollaborator);

      });

      this.professors = result.professors;

    });
  }//internal collaborators


  externalCollaboratorsTable(): void {
    const dialogRef = this.dialog.open(ExternalCollaboratorsSearchModal, {
      data: {
        idsExternalCollaborators: this.idsExternalCollaborators,
        externals: this.externals
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      if(!result){return;}

      result.idsExternalCollaborators.forEach(element => {

        console.log(element+"\n");

        var externalParticipantId = element;

        var participationtype = new PartycipationType(1, 'Colaborativa');

        var externalParticipant = new ExternalParticipant(externalParticipantId,'.', '.', '.', '.', new Organization(1,'.','.'));

        var external = new ExternalSocialActionCollaborator(externalParticipant, participationtype);

        this.externalCollaborators.push(external);

      });

      this.externals = result.externalCollaborators;

    });
  }//external collaborators




}

interface Food {
  value: string;
  viewValue: string;
}

