import {Component, ViewChild, Inject} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { SocialActionCollaboratorService } from '../../../service/social-action-collaborator.service';
import { InternalSocialActionCollaborator } from '../../../model/internal-social-action-collaborator.model';
import { Router } from "@angular/router";
import {MatPaginator} from '@angular/material/paginator';
import { Professor } from 'src/app/model/professor.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExternalSocialActionCollaborator } from 'src/app/model/external-social-action-collaborator.model';
import { ExternalParticipant } from 'src/app/model/external-participant.model';


@Component({
  selector: 'see-external-collaboratos',
  styleUrls: ['see-external-collaboratos.scss'],
  templateUrl: 'see-external-collaboratos.html',
})
export class SeeExternalCollaborators {

  displayedColumns: string[] = ['externalParticipantId','name', 'lastName', 'email'];

  dataSource = new MatTableDataSource<ExternalParticipant>();

  externalCollaborators: ExternalSocialActionCollaborator[] = new Array<ExternalSocialActionCollaborator>();

  externalParticipants: ExternalParticipant[] = new Array<ExternalParticipant>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private service: SocialActionCollaboratorService, 
    public dialogRef: MatDialogRef<SeeExternalCollaborators>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 

      this.externalCollaborators = data.externalCollaborators;

      this.externalCollaborators.forEach(externalCollaborator => {
        this.externalParticipants.push(externalCollaborator.externalParticipant);
      });
  
      this.dataSource= new MatTableDataSource(this.externalParticipants);
      this.dataSource.paginator = this.paginator;

  
  }

  ngOnInit() {}

  close(): void {

    this.dialogRef.close();

  }



}