import { Injectable} from "@angular/core";
import { News } from "../model/news.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject} from 'rxjs';


@Injectable()
export class NewsService {

/*
  private initArt = 'https://newsapi.org/v2/sources?language=en'
  private initSourc = 'https://newsapi.org/v2/top-headlines?sources=techcrunch'
  private api_key = "&apiKey=0ac81979a75f433b9380d50093466c69";
*/

  //when its called by the backend
  private url = 'http://localhost:8086/ie/api/news/';
  private url_findAll = 'findNews';
  private url_find_by_id = 'findById/';
  private url_find_by_category = 'findByNewsCategory/';
  private url_find_by_filter = 'filterNews/';
  public news: News[] = new Array<News>();
  public arcticle: News = new News();
  setGroupFilter$ = new Subject<any>();
	getGroupFilter = this.setGroupFilter$.asObservable();



  constructor(private http: HttpClient) {

  }

  findAll(headers) {

    let header = new HttpHeaders().set("Authorization", headers);
    return this.http.get<News[]>(this.url+this.url_findAll,{headers:header});

  }

  findById(id,headers){

    let header = new HttpHeaders().set("Authorization", headers);
    return this.http.get<News>(this.url+this.url_find_by_id+id,{headers:header});

  }

  findByCategory(category,headers){
    let header = new HttpHeaders().set("Authorization", headers);
    return this.http.get<News>(this.url+this.url_find_by_category+category,{headers:header});
  }

  findByFilters(start,end,branch,title,headers){
    let header = new HttpHeaders().set("Authorization", headers);
    console.log(this.url+this.url_find_by_filter+start+"/"+end+"/"+branch+"/"+title);

    return this.http.get<News>(this.url+this.url_find_by_filter+start+"/"+end+"/"+branch+"/"+title,{headers:header});
  }



}
