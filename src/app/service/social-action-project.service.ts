import { Injectable, Inject, EventEmitter} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions, Headers, Response, URLSearchParams } from '@angular/http';
import { SocialActionProject } from "../model/social-action-project.model";
import { Observable } from 'rxjs';
import { SocialActionReviewComment } from '../model/social-action-review-comment.model';
import { InternalSocialActionCollaborator } from '../model/internal-social-action-collaborator.model';


@Injectable()
export class SocialActionProjectService {

  private url = 'http://localhost:8086/ie/api/social-action-project';
  private listProjects: SocialActionProject[] = new Array<SocialActionProject>();

  constructor(private http: HttpClient) {
  }

  showAllProjets(headers){
    let header = new HttpHeaders().set(
      "Authorization",
      headers
    );
    return this.http.get<SocialActionProject[]>(this.url+'/find', {headers:header});
  }

  requestPublication(socialActionProject: SocialActionProject, headers){
    let header = new HttpHeaders().set(
      "Authorization",
      headers
    );
    return this.http.post(this.url+'/resquest-publication', socialActionProject, {headers:header}).toPromise().then();
  }

  getByCode(code: number, headers): Observable<SocialActionProject>{
    let header = new HttpHeaders().set(
      "Authorization",
      headers
    );
    return this.http.get<SocialActionProject>(this.url+'/findByCode?code='+code, {headers:header});
  }

  fixRequestPublication(socialActionProject: SocialActionProject, headers){
    let header = new HttpHeaders().set(
      "Authorization",
      headers
    );
    return this.http.post(this.url+'/fix-request', socialActionProject, {headers:header}).toPromise().then();
  }

  approve(code: number, headers){
    let header = new HttpHeaders().set(
      "Authorization",
      headers
    );
    return this.http.get<Boolean>(this.url+'/approve?code='+code,{headers:header});
  }

  refuse(socialActionReviewComment: SocialActionReviewComment, code: number, headers){
    let header = new HttpHeaders().set(
      "Authorization",
      headers
    );
    return this.http.post(this.url+'/refuse?code='+code, socialActionReviewComment,{headers:header}).toPromise().then();
  }

}