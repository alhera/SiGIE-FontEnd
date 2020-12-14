import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  HttpResponse, HttpParams } from '@angular/common/http';
import { Observable , of} from 'rxjs'
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AccountCredentials } from '../model/accountcredentials.model';

@Injectable()
export class AuthenticationService {

    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        console.log(`${environment.contextUrl}/login`);
        let params = new HttpParams();
        params.append("username", username);
        params.append("password", password);

         return this.http.post<any>(`${environment.contextUrl}/login?username=`+username + `&password=` + password,
          {"username":username, "password":password},{observe:"response"});

    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        return of(true);
    }
}
