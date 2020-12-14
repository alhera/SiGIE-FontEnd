import {Area} from './area.model';
import {Course} from './course.model';
import {Emphasis} from './emphasis.model';
import {Degree} from './degree.model';

export class StudyPlan {
  constructor(public studyPlanCode?: string,
              public careerName?: string,
              public approvalYear?: number,
              public studyPlanDocument?: File,
              public active?: boolean,
              public ucrApprovalDocument?: File,
              public careerCode?: string,
              public levelsQuantity?: number,
              public durationInYears?: number,
              public careerPlanDescription?: string,
              public studyPlanDescription?: string,
              public areas?: Array<Area>,
              public courses?: Array<Course>,
              public emphasis?: Array<Emphasis>,
              public degree?: Degree) {
  }
}
