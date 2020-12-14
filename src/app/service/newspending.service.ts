import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../model/news.model';
import { UniversityBranch } from '../model/universitybranch.model';
import { NewsCategory } from '../model/newscategory.model';

@Injectable({
  providedIn: 'root'
})
export class NewspendingService {

  proyectoUrl:string = 'http://localhost:8086/ie/api/news/';

  constructor(private http: HttpClient) {
    
   }

   findAllNewsPendingApprove(): Observable<News[]> {
    const url:string = this.proyectoUrl + "findNewsPendingApprove";
    return this.http.get<News[]>(url);
  }

  saveNewsPending(newsPending: News): Observable<News> {
    const url:string = this.proyectoUrl  + 'save';
    return this.http.post<News>(url, newsPending);
  } 

  findAllUniversityBranch(): Observable<UniversityBranch[]> {
    const url:string = 'http://localhost:8086/ie/api/universityBranch/findUniversityBranch' ;
    return this.http.get<UniversityBranch[]>(url);
  }

  findAllNewCategory(): Observable<NewsCategory[]> {
    const url:string = 'http://localhost:8086/ie/api/newscategory/findNewsCategory' ;
    return this.http.get<NewsCategory[]>(url);
  }

}
