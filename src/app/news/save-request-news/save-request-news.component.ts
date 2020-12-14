import { Component, OnInit } from '@angular/core';
import { NewspendingService } from 'src/app/service/newspending.service';
import { News } from '../../model/news.model';
import { NewsCategory } from '../../model/newscategory.model';
import { UniversityBranch } from 'src/app/model/universitybranch.model';

interface Roles {
  value: string;
  viewValue: number;
}

@Component({
  selector: 'app-save-request-news',
  templateUrl: './save-request-news.component.html',
  styleUrls: ['./save-request-news.component.scss']
})
export class SaveRequestNewsComponent implements OnInit {
  news: News;
  newsCategory: NewsCategory;
  universityBranch: UniversityBranch;
  files: File[] = [];
  branch: Array<any>;
  newCategory: Array<any>;
  imageNewsURL:string;

  roles: Roles[] = [
    {value: 'Profesor', viewValue: 1},
    {value: 'Estudiante', viewValue: 2},
    {value: 'Funcionario', viewValue: 3}
  ];
  constructor(private newspendingService: NewspendingService) { }

  ngOnInit(): void {
    this.news = new News();
    this.newsCategory = new NewsCategory();
    this.universityBranch = new UniversityBranch();
    this.initBranch();
    this.initNewCategory();
  }

  saveNews(): void {
    const newNewsPending: News = this.news;
    const newsCategoryPending: NewsCategory = this.newsCategory
    const branchPending: UniversityBranch = this.universityBranch;
    newNewsPending.newsCategory = newsCategoryPending;
    newNewsPending.universityBranch = branchPending;
    newNewsPending.visible = false;
    newNewsPending.image = this.files[0].name;
    this.newspendingService.saveNewsPending(newNewsPending).subscribe(newsPendingApprove => {
      this.news = newsPendingApprove;
    });
    //this.clearForm();
  }

 // clearForm(): void {
   // this.news = new News();
 // }

  initBranch() {
    this.newspendingService.findAllUniversityBranch().subscribe(newspending => {
      this.branch = newspending;
    });
  }

  initNewCategory() {
    this.newspendingService.findAllNewCategory().subscribe(newspending => {
      this.newCategory = newspending;
    });
  }

  onSelect(event) {
    //console.log(event);
    if (this.files.length < 1) {
      this.files.push(...event.addedFiles);
    } else {
      this.onRemove(event);
      this.files.push(...event.addedFiles);
    }
  }

  onRemove(event) {
    //console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
