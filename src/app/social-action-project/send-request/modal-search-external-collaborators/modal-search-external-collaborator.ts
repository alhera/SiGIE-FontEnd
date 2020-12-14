import {Component, ViewChild, Inject} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { SocialActionCollaboratorService } from '../../../service/social-action-collaborator.service';
import { InternalSocialActionCollaborator } from '../../../model/internal-social-action-collaborator.model';
import { Router } from "@angular/router";
import {MatPaginator} from '@angular/material/paginator';
import { Professor } from 'src/app/model/professor.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExternalSocialActionCollaborator } from 'src/app/model/external-social-action-collaborator.model';
import { AuthenticationService } from 'src/app/service/account-service';

@Component({
  selector: 'external-collaborators-search',
  styleUrls: ['modal-search-external-collaborator.css'],
  templateUrl: 'modal-search-external-collaborator.html',
})
export class ExternalCollaboratorsSearchModal {

  displayedColumns: string[] = ['externalParticipantId','name', 'lastName', 'email', 'addCollaborator'];

  dataSource = new MatTableDataSource<ExternalSocialActionCollaborator>();

  externalCollaborators: ExternalSocialActionCollaborator[] = new Array<ExternalSocialActionCollaborator>();

  buttonText: string;

  idsExternalCollaborators: number[] = new Array<number>();

  SELECT = "Seleccionar";
  DELETE = "Eliminar";

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private service: SocialActionCollaboratorService, 
    public dialogRef: MatDialogRef<ExternalCollaboratorsSearchModal>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any, auten:AuthenticationService) {
      
      this.idsExternalCollaborators = this.data.idsProfessors;
      this.externalCollaborators = this.data.externals;

      auten.login('alvaro.menamonge@ucr.ac.cr', 'amm')
      .subscribe(
        resp => {
          localStorage.setItem("currentUser",resp.headers.get('Authorization'))

      
          if(this.externalCollaborators.length==0){
      
            this.service.getExternalParticipants(localStorage.getItem('currentUser')).subscribe((data: any[])=>{
              this.externalCollaborators = data;
              this.dataSource= new MatTableDataSource(this.externalCollaborators);
              this.dataSource.paginator = this.paginator;
            });
      
        }else{
      
          this.dataSource= new MatTableDataSource(this.externalCollaborators);
          this.dataSource.paginator = this.paginator;
      
        }
      });

   

  }

  ngOnInit() {
    this.idsExternalCollaborators = this.data.idsExternalCollaborators;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addRemoveCollaborator(externalParticipantId: number){

    var button = document.getElementById(externalParticipantId+"");

    var textButton =button.textContent;

    if(textButton==this.SELECT){

      button.textContent = this.DELETE;

      this.idsExternalCollaborators.push(externalParticipantId);

    }else{

      button.textContent = this.SELECT;

      this.deleteId(externalParticipantId);

    }

  }

  deleteId(idExternalCollaborator:number) {
    const index: number = this.idsExternalCollaborators.indexOf(idExternalCollaborator);
    if (index !== -1) {
        this.idsExternalCollaborators.splice(index, 1);
    }        
}

  addCollaborators(){

    this.onNoClick();

  }

  onNoClick(): void {

    this.dialogRef.close({ 
      idsExternalCollaborators: this.idsExternalCollaborators,
      externalCollaborators: this.externalCollaborators
    });

  }


}