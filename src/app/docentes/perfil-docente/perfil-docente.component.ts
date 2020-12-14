import { Component, OnInit } from '@angular/core';
import docentes, {getDocenteCourses as getDocCourses,
getDocenteLocation } from "../docentes";


@Component({
  selector: 'app-perfil-docente',
  templateUrl: './perfil-docente.component.html',
  styleUrls: ['./perfil-docente.component.scss']
})
export class PerfilDocenteComponent implements OnInit {
  docentesCollection = [];
  constructor() { 
    this.docentesCollection = docentes;
    console.log(this.docentesCollection[0]);
  }

  ngOnInit(): void {


  }
  /**
   * getCursos
name:string : Array<string>  */ 
  public getCursos(name:string): Array<string> {
      return getDocCourses(name);   
  }

}
