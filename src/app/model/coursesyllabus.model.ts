
export class CourseSyllabus {
  constructor(public courseSyllabusId?: number,
              public version?: number,
              public active?: boolean,
              public courseBaseSyllabus?: File,
              public approbationDate?: string) {
  }
}
