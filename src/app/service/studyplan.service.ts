import { Injectable, Inject, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudyPlan} from '../model/studyplan.model';
import {Observable} from 'rxjs';
import {Course} from '../model/course.model';

@Injectable()
export class StudyPlanService {

  private url = 'http://127.0.0.1:8086/ie/api/studyplan/';
  private studyPlans: StudyPlan[] = new Array<StudyPlan>();

  constructor(private http: HttpClient) {
  }

  getAllStudyPlans(): Observable<StudyPlan[]> {
    return this.http.get<StudyPlan[]>(this.url);
  }

  getStudyPlanById(studyPlanCode: string): Observable<StudyPlan> {
    return this.http.get<StudyPlan>(this.url + studyPlanCode);
  }

  getCourseById(courseId: string): Observable<Course> {
    return this.http.get<Course>(this.url + 'curso/' + courseId);
  }

}
