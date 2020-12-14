import {Component, OnInit, ViewChild} from '@angular/core';
import { EventService } from "../../service/event.service";
import { Event } from "../../model/event.model";
import { EventType } from '../../model/eventtype.model';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router, Routes } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})


export class ShowComponent implements OnInit {

  displayedColumns: string[] = ['eventName', 'responsibleName','eventDate', 'type', 'details', 'actions',
  'name', 'status','eventTypeName'];
  events: Event[];
  types: EventType[];
  dataSource= new MatTableDataSource<Event>();

  filterValues = {};
  filterSelectObj = [
    {
      name: 'estado',
      columnProp: 'status',
      options: []
    },
    {
      name: 'recinto',
      columnProp: 'name',
      options: []
    },
    {
      name: 'tipo',
      columnProp: 'eventTypeName',
      options: []
    }
  ]


  constructor(private eventService:EventService, private router:Router, private toastr: ToastrService ) { 
  }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  ngOnInit() {
    this.getAll();
    this.dataSource.filterPredicate = this.createFilter();

  }
  
  getAll(){
    this.eventService.getAll().subscribe((data:Event[]) => { console.log(data.values);
      this.events = data;
      this.dataSource.data = data;
      this.filterSelectObj.filter((o) => {
        o.options = this.getFilterObject(this.events,o.columnProp);
      });
      });


  }

  getFilterObject(fullObj:Event[], key) {
    const uniqChk = [];

    fullObj.filter((obj:Event) => {
      if (!uniqChk.includes(obj[key]) && key=='status') {
        uniqChk.push(obj[key]);
      } if (!uniqChk.includes(obj.eventType[key])  && key=='eventTypeName'){
        uniqChk.push(obj.eventType[key]);
      } if(!uniqChk.includes(obj.branch[key]) && key=='name'){
        uniqChk.push(obj.branch[key]);
      }

      return obj;
    });
    return uniqChk;
  }

  filterChange(filter, event) {
    //let filterValues = {}
    this.resetFilters();
    this.filterValues[filter.columnProp] = event.target.value.trim().toLowerCase()
    this.dataSource.filter = JSON.stringify(this.filterValues)
    
  }

    // Custom filter method fot Angular Material Datatable
    createFilter() {
      let filterFunction = function (data: any, filter: string): boolean {
        let searchTerms = JSON.parse(filter);
        let isFilterSet = false;
        for (const col in searchTerms) {
          if (searchTerms[col].toString() !== '') {
            isFilterSet = true;
          } else {
            delete searchTerms[col];
          }
        }
  
        console.log(searchTerms);
  
        let nameSearch = () => {
          let found = false;
          if (isFilterSet) {
            for (const col in searchTerms) {

              if(col=='status'){ 
              searchTerms[col].trim().toLowerCase().split(' ').forEach(word => {
                
                if ((data[col].toString().toLowerCase().indexOf(word) != -1 && isFilterSet)
                 ) {
                  found = true
                }
              });
            }//if status
            else if(col=='name'){
              searchTerms[col].trim().toLowerCase().split(' ').forEach(word => {
                
                if ((data['branch'][col].toString().toLowerCase().indexOf(word) != -1 && isFilterSet)
                 ) {
                  found = true
                }
              });
            }//if branch
            else if(col=='eventTypeName'){
              searchTerms[col].trim().toLowerCase().split(' ').forEach(word => {
                
                if ((data['eventType'][col].toString().toLowerCase().indexOf(word) != -1 && isFilterSet)
                 ) {
                  found = true
                }
              });
            }//if eventype
            }
            return found
          } else {
            return true;
          }
        }
        return nameSearch()
      }
      return filterFunction
    }
  
    resetFilters() {
      this.filterValues = {}
      this.filterSelectObj.forEach((value:any, key) => {
        value.modelValue = undefined;
      })
      this.dataSource.filter = "";
    }


  aprove(event: Event){
    this.eventService.aprove(event);
    this.toastr.success("Solicitud de evento aprobada")
    
  }

  reject(event: Event){
    this.eventService.reject(event);
    this.toastr.info("Solicitud de evento rechazada")
  }

  onSelect(event: Event): void  {
    console.log(event.eventName);
    this.eventService.selectedEvent = event;
    this.router.navigate(['/event-details']);

  }

}
