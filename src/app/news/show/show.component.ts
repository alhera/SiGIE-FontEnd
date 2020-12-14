import { Component, OnInit, OnChanges, Input} from '@angular/core';
import { NewsService } from '../../service/news.service';
import { AuthenticationService } from '../../service/authentication.service';
import { News } from '../../model/news.model';
import { NewsCategory } from '../../model/newscategory.model';
import { UniversityBranch } from '../../model/universitybranch.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit,OnChanges {

  @Input() groupFilters: Object;
	@Input() searchByKeyword: string;

  allNews: News[] = new  Array<News>();
  news: News[] = new Array<News>();
  filtheredNews: News[] = new Array<News>();

  page = 0;
  size = 4;

  constructor(private newsService: NewsService,authenticationService:AuthenticationService,
                private route: ActivatedRoute,private router: Router) {

    authenticationService.login('alvaro.menamonge@ucr.ac.cr', 'amm')
    .subscribe(
      res => {
        localStorage.setItem("currentUser",res.headers.get('Authorization'));
      });

  }

  ngOnInit() {
    //aplicar filtros
    this.route.queryParams.subscribe(params => {
      this.news = new Array<News>()
      //categoría
      if(params['category'] != undefined){
          this.newsService.findByCategory(params['category'],localStorage.getItem("currentUser"))
          .subscribe(data => {
            const restData = Object.entries(data);

            restData.forEach(element => {

              let elementData = element[1];

              this.news.push(
                new News(
                  elementData['newsId'], elementData['title'],  elementData['content'],
                  elementData['publicationDate'],elementData['image'],elementData['visible'],
                  elementData['expirationDate'],elementData['authorName'],elementData['authorLastName'],elementData['authorMail'],
                  new NewsCategory(elementData['newsCategory']['newsCategoryId'], elementData['newsCategory']['name']),
                  new UniversityBranch(elementData['universityBranch'].branchId, elementData['universityBranch']['name']),
                  elementData['authorInstitutionRole']
                )
              );
            });
          });
      }
      //filtros
      else if(params['startDate'] != undefined || params['endDate'] != undefined ||
                params['universityBranchId'] != undefined || params['title'] != undefined ){


        let startDate = "0001-01-01";
        let endDate = "2500-01-01";
        let universityBranchId=0;
        let title=null;
        if(params['startDate'] != ""){
          startDate = params['startDate'];
        }
        if(params['endDate'] != ""){
          endDate = params['endDate'];
        }
        if(params['universityBranchId'] != ""){
          universityBranchId = params['universityBranchId'];
        }
        if(params['title'] != ""){
          title = params['title'];
        }

        this.newsService.findByFilters( startDate,
                                        endDate,
                                        universityBranchId,
                                        title,
                                        localStorage.getItem("currentUser"))

        .subscribe(data => {
          const restData = Object.entries(data);

          restData.forEach(element => {

            let elementData = element[1];

            this.news.push(
              new News(
                elementData['newsId'], elementData['title'],  elementData['content'],
                elementData['publicationDate'],elementData['image'],elementData['visible'],
                elementData['expirationDate'],elementData['authorName'],elementData['authorLastName'],elementData['authorMail'],
                new NewsCategory(elementData['newsCategory']['newsCategoryId'], elementData['newsCategory']['name']),
                new UniversityBranch(elementData['universityBranch'].branchId, elementData['universityBranch']['name']),
                elementData['authorInstitutionRole']
              )
            );
          });
        });

      }
      //traiga todos
      else{
        this.newsService.findAll(localStorage.getItem("currentUser"))
          .subscribe(data => {
            const restData = Object.entries(data);

            restData.forEach(element => {

              let elementData = element[1];

              this.news.push(
                new News(
                  elementData['newsId'], elementData['title'],  elementData['content'],
                  elementData['publicationDate'],elementData['image'],elementData['visible'],
                  elementData['expirationDate'],elementData['authorName'],elementData['authorLastName'],elementData['authorMail'],
                  new NewsCategory(elementData['newsCategory'].newsCategoryId, elementData['newsCategory']['name']),
                  new UniversityBranch(elementData['universityBranch'].branchId, elementData['universityBranch']['name']),
                  elementData['authorInstitutionRole']
                )
              );
          });
        });

      }
    });

    this.getData({pageIndex: this.page, pageSize: this.size});
  }

  loadNews(): void{
    this.filtheredNews = this.filtheredNews.length > 0 ? this.filtheredNews : this.news;
  }


  onSubmit(filtherData) {
    console.log(filtherData);
  }

  ngOnChanges(): void {
    if (this.groupFilters) this.filterNewsList(this.groupFilters, this.allNews);
  }


  getData(obj) {
    let index=0,
        startingIndex=obj.pageIndex * obj.pageSize,
        endingIndex=startingIndex + obj.pageSize;


    this.allNews = this.news.filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
  }

  filterNewsList(filters: any, news: any): void {
		this.filtheredNews = this.allNews;
		const keys = Object.keys(filters);
		const filtherArticle = article => {
			let result = keys.map(key => {
				if (!~key.indexOf('date')) {
					if(article[key]) {
						return String(article[key]).toLowerCase().startsWith(String(filters[key]).toLowerCase())
					} else {
						return false;
					}
				}
			});
			result = result.filter(it => it !== undefined);
			if (filters['dateto'] && filters['datefrom']) {
				if (article['date']) {
					if (+article['date'] >= +filters['datefrom'] && +article['date'] <= +filters['dateto']) {
						result.push(true);
					} else {
						result.push(false);
					}
        } else {
          result.push(false);
        }
      }
			return result.reduce((acc, cur: any) => { return acc & cur }, 1)
		}
		this.filtheredNews = this.allNews.filter(filtherArticle);
  }

}
