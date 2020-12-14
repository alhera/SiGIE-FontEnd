import { Component, OnInit } from '@angular/core';
import {StudyPlanService} from '../../service/studyplan.service';
import {StudyPlan} from '../../model/studyplan.model';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit {

  studyPlans: StudyPlan[];

  constructor(private studyPlanService: StudyPlanService) {
    this.studyPlans = new Array<StudyPlan>();
  }

  ngOnInit(): void {
    this.studyPlanService.getAllStudyPlans().subscribe(studyPlans => {
      this.studyPlans = studyPlans;
    });
  }

}
