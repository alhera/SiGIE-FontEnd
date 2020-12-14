import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsService } from 'src/app/service/news.service';
import { NewspendingService} from 'src/app/service/newspending.service';
import { News } from 'src/app/model/news.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-show-news-pending-approve',
  templateUrl: './show-news-pending-approve.component.html',
  styleUrls: ['./show-news-pending-approve.component.scss']
})
export class ShowNewsPendingApproveComponent implements OnInit {
  columnsTable = ['authorName','title','visible','management'];
  dataSource : MatTableDataSource<News>;
  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;
  @ViewChild(MatSort,{static: false}) sort: MatSort;
  constructor(private newspendingService: NewspendingService) { 
    
  }

  ngOnInit(): void {
    this.newspendingService.findAllNewsPendingApprove().subscribe(newspending => {
      this.dataSource = new MatTableDataSource(newspending);
    });
  }

  ngAfterViewInit() {
    // this.recintoData.recinto.subscribe(recinto=> this.message = recinto);
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
   }
 
   applyFilter(filterValue: string) {
     filterValue = filterValue.trim(); // Remove whitespace
     filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
     this.dataSource.filter = filterValue;
   }

}
