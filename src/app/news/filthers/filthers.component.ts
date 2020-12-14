import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { UniversityBranchService } from '../../service/universitybranch.service';
import { AuthenticationService } from '../../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filthers',
  templateUrl: './filthers.component.html',
  styleUrls: ['./filthers.component.scss']
})
export class FilthersComponent implements OnInit {

  form: FormGroup;
	@Output() autoSearch: EventEmitter<string> = new EventEmitter<string>();
	@Output() groupFilters: EventEmitter<any> = new EventEmitter<any>();
  universityBranches: any;

  constructor(private fb: FormBuilder, private universityBranchService:UniversityBranchService,
                authenticationService:AuthenticationService, private _router: Router) {
    authenticationService.login('alvaro.menamonge@ucr.ac.cr', 'amm')
    .subscribe(
      res => {
        localStorage.setItem("currentUser",res.headers.get('Authorization'));
        this.universityBranchService.initSources(localStorage.getItem("currentUser"))
          .subscribe(data => {
            this.universityBranches = data;
          });
      }
    );
  }

	ngOnInit(): void {
		this.buildForm();
  }

	buildForm(): void {
		this.form = this.fb.group({
			title: new FormControl(''),
			branch: new FormControl(''),
			datefrom: new FormControl(''),
			dateto: new FormControl('')
		});
	}

	search(filters: any): void {

    this._router.navigate(['/news/show'], {queryParams: { startDate: filters['datefrom'],
                                                          endDate: filters['dateto'],
                                                          universityBranchId: filters['branch'],
                                                          title: filters['title']}});

  }




}
