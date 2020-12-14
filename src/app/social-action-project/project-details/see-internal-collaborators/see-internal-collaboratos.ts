import {Component, ViewChild, Inject} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { SocialActionCollaboratorService } from '../../../service/social-action-collaborator.service';
import { InternalSocialActionCollaborator } from '../../../model/internal-social-action-collaborator.model';
import { Router } from "@angular/router";
import {MatPaginator} from '@angular/material/paginator';
import { Professor } from 'src/app/model/professor.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExternalSocialActionCollaborator } from 'src/app/model/external-social-action-collaborator.model';


@Component({
  selector: 'see-internal-collaboratos',
  styleUrls: ['see-internal-collaboratos.scss'],
  templateUrl: 'see-internal-collaboratos.html',
})
export class SeeInternalCollaborators {

  displayedColumns: string[] = ['professorId','name', 'lastName', 'institutionalMail'];

  dataSource = new MatTableDataSource<Professor>();

  internalCollaborators: InternalSocialActionCollaborator[];

  professors: Professor[] = new Array<Professor>();

  name: string;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private service: SocialActionCollaboratorService, 
    public dialogRef: MatDialogRef<SeeInternalCollaborators>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 

    this.internalCollaborators = data.internalCollaborators;

    this.internalCollaborators.forEach(internalCollaborator => {
      this.professors.push(internalCollaborator.professor);
    });

    this.dataSource= new MatTableDataSource(this.professors);
    this.dataSource.paginator = this.paginator;

  }

  ngOnInit() {}

  close(): void {

    this.dialogRef.close();

  }



}