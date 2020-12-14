import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilDocenteComponent } from './perfil-docente/perfil-docente.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCard, MatCardModule } from "@angular/material/card";



@NgModule({
  declarations: [PerfilDocenteComponent],
  imports: [
    CommonModule, MatCardModule
  ]
})
export class DocentesModule { }
