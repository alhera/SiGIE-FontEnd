import { EventActivity } from "./eventactivity.model";

export class ProgrammeDay {

    constructor(public programmeDayId?: number, public eventDayDate?: Date, public eventActivities?: Array<EventActivity>) {}
 
 }