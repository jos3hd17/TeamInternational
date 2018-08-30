import { Component, OnInit, Input } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';




@Component({
  selector: 'app-job-title',
  templateUrl: './job-title.component.html',
  styleUrls: ['./job-title.component.css']
})
export class JobTitleComponent implements OnInit {
  @Input('jobsList') jobsList;
  @Input('disable') disable;
  @Input('selection') selection
  selected ="";
  constructor() { }

  ngOnInit() {
    this.selected = this.selection.emp_job_title;
  }
  jobsControl = new FormControl('', [Validators.required]);
 

}
