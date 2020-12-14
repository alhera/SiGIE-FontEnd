
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from "./news.service";
import { UniversityBranchService } from "./universitybranch.service";
import { AuthenticationService } from "./authentication.service";
import { EventService } from "./event.service";
import { NewspendingService } from './newspending.service';

@NgModule({
  providers: [NewsService,UniversityBranchService,AuthenticationService, NewspendingService, EventService],
  imports: [
    CommonModule
  ]
})
export class ServiceModule { }
