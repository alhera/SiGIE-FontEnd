import { ExternalParticipant } from './external-participant.model';
import { PartycipationType } from './participation-type.mode';

export class ExternalSocialActionCollaborator {

    externalParticipant: ExternalParticipant;
    participationType: PartycipationType;

    constructor(externalParticipant: ExternalParticipant, participationType: PartycipationType){

        this.externalParticipant = externalParticipant;
        this.participationType = participationType;

    }

}