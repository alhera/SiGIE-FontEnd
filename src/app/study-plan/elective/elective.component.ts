import {Component, OnInit, Input, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Course} from '../../model/course.model';

export interface DialogData {
  electiveCourse: Course
}

@Component({
  selector: 'app-elective',
  templateUrl: './elective.component.html'
})
export class ElectiveComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ElectiveComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
