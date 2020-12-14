import { Component, OnInit, Input } from '@angular/core';
import { StudyPlanService } from '../../service/studyplan.service';
import {StudyPlan} from '../../model/studyplan.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Course} from '../../model/course.model';
import {Level} from '../../model/level.model';
import {ElectiveComponent} from '../elective/elective.component';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss']
})
export class StructureComponent implements OnInit {

  @Input() studyPlanCode: string;

  studyPlan: StudyPlan;
  requisites: string;
  levels: Array<Level>;
  electiveCourse: Course;

  constructor(public dialog: MatDialog, private studyPlanService: StudyPlanService) {
    this.levels = new Array<Level>();
    this.electiveCourse = new Course();
  }

  openElectiveDialog(event, course: Course) {
    const dialogRef = this.dialog.open(ElectiveComponent, {
      data: {electiveCourse: course}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  defineSemesters() {
    this.studyPlan.courses.forEach(course => {
      if (course.emphasiss.length > 0) {  // in case that the current course has emphasis.
        course.emphasiss.forEach(emphasis => { // for each different emphasis and different semester is going to create
          let level = new Level(course.level)  // a different level.
          level.courses.push(course);
          level.emphassis = emphasis;
          // asks if the level and the emphasis is already registered in the levels array
          const isLevelRegister = (currentLevel:Level) => currentLevel.levelNumber === level.levelNumber
            && currentLevel.emphassis.emphasisId === level.emphassis.emphasisId;
          let levelIndex: number =  this.levels.findIndex(isLevelRegister);
          if (levelIndex === -1) { // if not, creates the level and puts it in the array
            this.levels.push(level)
          } else { // otherwise, registers the course in the existing level
            this.levels[levelIndex].courses.push(course);
          }
        });
      } else {  // in case that the current course has no emphasis.
        let level = new Level()
        level.courses.push(course)
        level.levelNumber = course.level
        // asks if the level is already registered in the levels array
        const isLevelRegister = (currentLevel:Level) => currentLevel.levelNumber === level.levelNumber;
        let levelIndex: number =  this.levels.findIndex(isLevelRegister);
        if (levelIndex === -1) { // if not, creates the level and puts it in the array
          this.levels.push(level)
        } else { // otherwise, registers the course in the existing level
          this.levels[levelIndex].courses.push(course);
        }
      }
    });
    // sorts the levels array to make it appear in order to the semester
    this.levels.sort(((a, b) => a.levelNumber - b.levelNumber));
  }

  ngOnInit(): void {
    this.studyPlanService.getStudyPlanById(this.studyPlanCode).subscribe(studyPlan => {
      this.studyPlan = studyPlan;
      this.defineSemesters();
    });
  }
}

