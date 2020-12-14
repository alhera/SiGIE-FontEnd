import { Injectable, EventEmitter} from "@angular/core";
import { UniversityBranch } from "../model/universitybranch.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class UniversityBranchService {


  private findAllURL = "http://localhost:8086/ie/api/universityBranch/findUniversityBranch";

  public universityBranches: UniversityBranch[] = new Array<UniversityBranch>();


  constructor(private http: HttpClient) {

  }

  initSources(headers) {
    let header = new HttpHeaders().set("Authorization", headers);
    return this.http.get(this.findAllURL,{headers:header});
  }


}
