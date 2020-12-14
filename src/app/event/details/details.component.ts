import { Component, OnInit} from '@angular/core';
import { EventService } from 'src/app/service/event.service';
import { Event } from "../../model/event.model";
import { ProgrammeDay } from "../../model/programmeday.model";
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  selectedEvent: Event;
  displayedColumns: string[] = ['eventDayDate', 'activity', 'venue', 'activityStartTime', 'activityEndingTime'];
  dataSource= new MatTableDataSource<ProgrammeDay>();

  constructor(private eventService:EventService) { }

  ngOnInit(): void {
    this.selectedEvent = this.eventService.selectedEvent;
    this.eventService.selectedEvent = undefined;

    this.dataSource.data = this.selectedEvent.programmeDays;
  }

}
