import { Professor } from './professor.model';
import { PartycipationType } from './participation-type.mode';

export class InternalSocialActionCollaborator {

    professor: Professor;
    participationType: PartycipationType;

    constructor(professor: Professor, participationType: PartycipationType){

        this.professor = professor;
        this.participationType = participationType;

    }

}