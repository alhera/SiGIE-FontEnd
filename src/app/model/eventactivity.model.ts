import { Time } from '@angular/common';

export class EventActivity {

    constructor(public activityId?: number, public activityName?: string
        , public activityStartTime?: Time, public activityEndingTime?: Time, public venue?: string ) {}
 
 }