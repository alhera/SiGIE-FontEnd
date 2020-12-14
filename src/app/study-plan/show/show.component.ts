import { Component, OnInit } from '@angular/core';
import { StudyPlanService } from '../../service/studyplan.service';
import {StudyPlan} from '../../model/studyplan.model';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowStudyPlanComponent implements OnInit {

  studyPlan?: StudyPlan;
  studyPlans: StudyPlan[];
  selectedStudyPlan: string;

  constructor(private studyPlanService: StudyPlanService) {
    this.studyPlan = new StudyPlan();
    this.studyPlans = new Array<StudyPlan>();
    this.selectedStudyPlan = '';
  }

  ngOnInit(): void {
    this.studyPlanService.getAllStudyPlans().subscribe(studyPlans => {
      this.studyPlans = studyPlans;
    });
  }

  onSelectedStudyPlan(studyPlanCode: string, event: Event) {
    this.selectedStudyPlan = studyPlanCode;
  }

}
