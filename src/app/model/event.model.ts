import { EventType } from './eventtype.model';
import { ProgrammeDay } from './programmeday.model';
import { UniversityBranch } from './universitybranch.model';
import { Time } from '@angular/common';


export class Event {

    constructor(public eventId?: number, public eventName?: string, public eventDate?: Date, public audience?: string, public synopsis?:
        string ,public participantRequirements?: string, public responsibleName?: string , public responsibleEmail?: string,
        public responsibleLastName?: string, public bookingRequired?: boolean, public onlineBookingURL?: string,
        public additionalInformationURL?: string, public haveProgramme?: boolean, public startTime?: Time , public status?: string, public eventType?:EventType,
        public programmeDays?:Array<ProgrammeDay> , public branch?: UniversityBranch ) {}

 }
