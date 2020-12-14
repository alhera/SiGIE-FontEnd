import { Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InternalSocialActionCollaborator } from '../model/internal-social-action-collaborator.model';


@Injectable()
export class SocialActionCollaboratorService {

  private url = 'http://localhost:8086/ie/api/social-action-collaborator';

  constructor(private http: HttpClient) {
  }

  getInternalCollaborators(headers){
    let header = new HttpHeaders().set(
      "Authorization",
      headers
    );
    return this.http.get<InternalSocialActionCollaborator[]>(this.url+'/findInternal',  {headers:header});
  }

  //TODO delete this method
  getProfessors(headers){
    let header = new HttpHeaders().set(
      "Authorization",
      headers
    );
    return this.http.get<InternalSocialActionCollaborator[]>(this.url+'/professors',  {headers:header});
  }

  //TODO delete this method
  getExternalParticipants(headers){
    let header = new HttpHeaders().set(
      "Authorization",
      headers
    );
    return this.http.get<InternalSocialActionCollaborator[]>(this.url+'/external_participants',  {headers:header});
  }

}