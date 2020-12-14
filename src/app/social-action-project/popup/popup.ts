import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Inject} from '@angular/core';

@Component({
    selector: 'my-popup',
    templateUrl: 'popup.html',
  })
  export class MyPopup {
  
    title: string;
    message: string;
    requestCode: number;
  
    constructor(
      private router: Router,
      public dialogRef: MatDialogRef<MyPopup>,
      @Inject(MAT_DIALOG_DATA) public data: any) {}
  
    ngOnInit() {
      this.requestCode = this.data.requestCode;
  
      if(this.requestCode==1){
        this.title = "Gracias por realizar su solicitud";
        this.message = "Su solicitud de publicación ha sido registrada con éxito.";
        this.router.navigate(['']);
      }else if(this.requestCode==-1){
        this.title = "Error";
        this.message = "Hubo un problema y no se pudo realizar la solicitud de publicación.";
      }

      if(this.requestCode==2){
        this.title = "Solicitud corregida";
        this.message = "Su solicitud de publicación ha sido enviada a revisión con éxito.";
        this.router.navigate(['']);
      }else if(this.requestCode==-2){
        this.title = "Error";
        this.message = "Hubo un problema en el servidor y no se pudo realizar la corrección.";
      }

      if(this.requestCode==3){
        this.title = "Proyecto aprobado";
        this.message = "El proyecto fue aprobado con éxito.";
        this.router.navigate(['/social-action-project/seeProjects']);
      }else if(this.requestCode==-3){
        this.title = "Error";
        this.message = "Hubo un problema en el servidor y no se pudo aprobar el proyecto.";
      }
  
    }
  
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }