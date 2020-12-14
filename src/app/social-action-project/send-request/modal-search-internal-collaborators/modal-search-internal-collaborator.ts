import {Component, ViewChild, Inject} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { SocialActionCollaboratorService } from '../../../service/social-action-collaborator.service';
import { InternalSocialActionCollaborator } from '../../../model/internal-social-action-collaborator.model';
import { Router } from "@angular/router";
import {MatPaginator} from '@angular/material/paginator';
import { Professor } from 'src/app/model/professor.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/service/account-service';


@Component({
  selector: 'internal-collaborators-search',
  styleUrls: ['modal-search-internal-collaborator.css'],
  templateUrl: 'modal-search-internal-collaborator.html',
})
export class InternalCollaboratorsSearchModal {

  displayedColumns: string[] = ['professorId','name', 'lastName', 'institutionalMail', 'addCollaborator'];

  dataSource = new MatTableDataSource<Professor>();

  professors:Professor[]=new Array<Professor>();

  internalCollaborators: InternalSocialActionCollaborator[] = new Array<InternalSocialActionCollaborator>();

  buttonText: string;

  idsProfessors: number[] = new Array<number>();

  SELECT = "Seleccionar";
  DELETE = "Eliminar";

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private service: SocialActionCollaboratorService, 
    public dialogRef: MatDialogRef<InternalCollaboratorsSearchModal>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any, auten:AuthenticationService) { 

      this.idsProfessors = this.data.idsProfessors;
      this.professors = this.data.professors;

      auten.login('alvaro.menamonge@ucr.ac.cr', 'amm').subscribe(resp => {
        
        localStorage.setItem("currentUser",resp.headers.get('Authorization'))
    
        if(this.professors.length==0){
          this.service.getProfessors(localStorage.getItem('currentUser')).subscribe((data: any[])=>{
            this.professors = data;
            this.dataSource= new MatTableDataSource(this.professors);
            this.dataSource.paginator = this.paginator;
          });
    
        }else{
    
          this.dataSource= new MatTableDataSource(this.professors);
          this.dataSource.paginator = this.paginator;
    
        }
    });




  }

  ngOnInit() {
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addRemoveCollaborator(professorId: number){

    var button = document.getElementById(professorId+"");

    var textButton =button.textContent;

    if(textButton==this.SELECT){

      button.textContent = this.DELETE;

      this.idsProfessors.push(professorId);

    }else{

      button.textContent = this.SELECT;

      this.deleteId(professorId);

    }

  }

  deleteId(idExternalCollaborator:number) {
    const index: number = this.idsProfessors.indexOf(idExternalCollaborator);
    if (index !== -1) {
        this.idsProfessors.splice(index, 1);
    }        
}

  addCollaborators(){

    this.dialogRef.close({ 
      idsProfessors: this.idsProfessors,
      professors: this.professors
     });

  }

  

}