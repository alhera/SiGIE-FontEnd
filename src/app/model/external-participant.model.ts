import { Organization } from './organization.model';

export class ExternalParticipant{

    externalParticipantId: number;
    name: string;
    lastName: string;
    academicDegree: string;
    email: string;
    organization: Organization

    constructor(
        externalParticipantId:number, 
        name: string,
        lastName: string,
        academicDegree: string,
        email: string,
        organization: Organization){

            this.externalParticipantId = externalParticipantId;
            this.name = name;
            this.lastName = lastName;
            this.academicDegree = academicDegree;
            this.email = email;
            this.organization = organization;
    }

}