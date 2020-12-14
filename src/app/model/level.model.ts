import {Emphasis} from './emphasis.model';
import {Course} from './course.model';

export class Level {
  constructor(public levelNumber?:number,
              public emphassis?: Emphasis,
              public courses?: Array<Course>) {
    this.emphassis = new Emphasis();
    this.courses = new Array<Course>();
  }
}
