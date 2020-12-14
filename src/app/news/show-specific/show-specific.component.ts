import { Component, OnInit } from '@angular/core';

import { News } from 'src/app/model/news.model';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NewsService } from '../../service/news.service';
import { NewsCategory } from '../../model/newscategory.model';
import { UniversityBranch } from '../../model/universitybranch.model';
import { AuthenticationService } from 'src/app/service/authentication.service';


@Component({
  selector: 'app-show-specific',
  templateUrl: './show-specific.component.html',
  styleUrls: ['./show-specific.component.scss']
})
export class ShowSpecificComponent implements OnInit {

  public news: News;
  private id = this.activeRoute.snapshot.paramMap.get("id");

  constructor(  private activeRoute: ActivatedRoute, private _router: Router,
                private newsService: NewsService, authenticationService:AuthenticationService) {

                  authenticationService.login('alvaro.menamonge@ucr.ac.cr', 'amm')
                  .subscribe(
                    res => {
                      localStorage.setItem("currentUser",res.headers.get('Authorization'));
                      this.newsService.findById(this.id,localStorage.getItem("currentUser"))
                        .subscribe(data => {
                          this.news = new News(
                            data['newsId'], data['title'],  data['content'],
                            data['publicationDate'],data['image'],data['visible'],
                            data['expirationDate'],data['authorName'],data['authorLastName'],data['authorMail'],
                            new NewsCategory(data['newsCategory'].newsCategoryId, data['newsCategory']['name']),
                            new UniversityBranch(data['universityBranch'].branchId, data['universityBranch']['name']),
                            data['authorInstitutionRole']
                          );

                        });
                    }
                  );
  }


  ngOnInit(): void {
  }

  onSubmit(filtherData) {
  }

  onBack(): void{
    this._router.navigate(['/news/show']);
  }

  search(param: string){
    this._router.navigate(['/news/show'], {queryParams: { category: param}});
  }


}
