import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore'; 
import { Observable } from 'rxjs';
import { Employee } from '../models/Employee';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddService {
  public employees: Observable<Employee[]>;
  public employeesCollection:AngularFirestoreCollection<Employee>;
  public countriesURL:string="https://restcountries.eu/rest/v2/all";

  constructor(public afs:AngularFirestore,private http:HttpClient) { }

  getCollection():Observable<Employee[]>{
    this.employeesCollection = this.afs.collection('employee');
    this.employees = this.employeesCollection.valueChanges();
    return this.employees;
  }
  getAllCountries():Observable<any>{
    return this.http.get(this.countriesURL);
  }
  setItem(employee: Employee){
    let emp = {
      emp_name: employee.emp_name,
      emp_dab:employee.emp_dab,
      emp_country:employee.emp_country,
      emp_username:employee.emp_username,
      emp_hire_date:employee.emp_hire_date,
      emp_status:employee.emp_status,
      emp_area:employee.emp_area,
      emp_job_title:employee.emp_job_title,
      emp_rate:employee.emp_rate
    }

    this.employeesCollection = this.afs.collection('employee');
    this.employeesCollection.doc(employee.emp_username).set(emp);
  }

  updateCollection(employee:Employee){
    let emp = {
      emp_name: employee.emp_name,
      emp_dab:employee.emp_dab,
      emp_country:employee.emp_country,
      emp_username:employee.emp_username,
      emp_hire_date:employee.emp_hire_date,
      emp_status:employee.emp_status,
      emp_area:employee.emp_area,
      emp_job_title:employee.emp_job_title,
      emp_rate:employee.emp_rate
    }
    this.employeesCollection = this.afs.collection('employee');
    this.employeesCollection.doc(employee.emp_username).update(emp)
  }
 
}
