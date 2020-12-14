import { CourseSyllabus } from './coursesyllabus.model';
import { Area } from './area.model';
import { Emphasis } from './emphasis.model';

export class Course {
  constructor(public courseId?: string,
              public name?: string,
              public credits?: number,
              public level?: number,
              public elective?: boolean,
              public hoursTheory?: number,
              public hoursPractice?: number,
              public hoursLab?: number,
              public hoursTheoryPractice?: number,
              public coursesSyllabus?: Array<CourseSyllabus>,
              public requisites?: Array<Course>,
              public corequisites?: Array<Course>,
              public childrenElectiveCourses?: Array<Course>,
              public area?: Area,
              public emphasiss?: Array<Emphasis>) {
    this.area = new Area();
    this.coursesSyllabus = new Array<CourseSyllabus>();
    this.corequisites = new Array<Course>();
    this.requisites = new Array<Course>();
    this.childrenElectiveCourses = new Array<Course>();
    this.emphasiss = new Array<Emphasis>();
  }
}
