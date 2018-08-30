import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, RequiredValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../models/Employee';
import { JobTitleComponent } from './job-title/job-title.component';
import { AddService } from './add.service';

export interface Country {
  name: string;
  id: string;
}
export interface Job {
  title: string;
  id: string;
}

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
  providers: [AddService]
})
export class AddEmployeeComponent implements OnInit {
  countryControl = new FormControl('', [Validators.required]);
  nameControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
  dateControl = new FormControl('', [Validators.required]);
  usernameControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
  statusControl = new FormControl('', [Validators.required]);
  rateControl = new FormControl('', [Validators.required]);
  public employee: Employee = new Employee();
  adding: boolean = false;
  edit: boolean = false;
  view: boolean = false;
  countryList;
  @ViewChild(JobTitleComponent) select: JobTitleComponent;

  constructor(private router: Router, private addService: AddService) {
    if (sessionStorage.getItem('item')) {
      this.employee = JSON.parse(sessionStorage.getItem('item'));
      
      this.edit = true;
      this.view = false;
      this.adding = true;
    }
    if (sessionStorage.getItem('view')) {
      this.employee = JSON.parse(sessionStorage.getItem('view'));
      this.countryControl = new FormControl({value:"",disabled:true});
      this.nameControl = new FormControl({value:"",disabled:true});
      this.dateControl = new FormControl({value:"",disabled:true});
      this.usernameControl = new FormControl({value:"",disabled:true});
      this.statusControl = new FormControl({value:"",disabled:true});
      this.rateControl = new FormControl({value:"",disabled:true});
      this.view = true;
      this.edit = false;
      this.adding = true;
    }
  }

  ngOnInit() {
    this.addService.getAllCountries().subscribe(t=>{
      this.countryList=t
    });
    if (this.employee.emp_area == 'Services') {
      this.jobs = [
        { title: 'Coking', id: 'Woof!' },
        { title: 'Engineer', id: 'Meow!' },
        { title: 'Lawyer', id: 'Moo!' },
        { title: 'Channel', id: 'Wa-pa-pa-pa-pa-pa-pow!' },
      ];
    } else {
      this.jobs = [
        { title: 'Dinner', id: 'Woof!' },
        { title: 'Oficer', id: 'Meow!' },
        { title: 'Policeman', id: 'Moo!' },
        { title: 'Dash', id: 'Wa-pa-pa-pa-pa-pa-pow!' },
      ];
    }
  }


  /* countryList: Country[] = [
    { name: 'Colombia', id: 'Buenas parceros!' },
    { name: 'United Kingdom', id: 'Hi mr!' },
    { name: 'Usa', id: 'Hi There!' },
    { name: 'Spain', id: 'Como mola!' },
  ]; */
  jobs: Job[] = [];

  back() {
    this.router.navigate(['employee/list']);
  }

  save() {
    let selected = this.select.selected;
    this.employee.emp_job_title = selected;
    sessionStorage.setItem("employee", JSON.stringify(this.employee));
    if (this.adding == false) {
      this.addService.setItem(this.employee);
      this.employee = new Employee();
      this.router.navigate(['employee/list']);
    }
    if (this.edit == true) {

      this.addService.updateCollection(this.employee);
      this.router.navigate(['employee/list']);
    }

  }
  setValue(kind) {
    this.employee.emp_area = kind;
    if (this.employee.emp_area == 'Services') {
      this.jobs = [
        { title: 'Coking', id: 'Woof!' },
        { title: 'Engineer', id: 'Meow!' },
        { title: 'Lawyer', id: 'Moo!' },
        { title: 'Channel', id: 'Wa-pa-pa-pa-pa-pa-pow!' },
      ];
    } else {
      this.jobs = [
        { title: 'Dinner', id: 'Woof!' },
        { title: 'Oficer', id: 'Meow!' },
        { title: 'Policeman', id: 'Moo!' },
        { title: 'Dash', id: 'Wa-pa-pa-pa-pa-pa-pow!' },
      ];
    }
  }

}
