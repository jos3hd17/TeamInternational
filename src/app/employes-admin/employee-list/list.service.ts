import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore'; 
import { Observable } from 'rxjs';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  public employees: Observable<Employee[]>;
  public employeesCollection:AngularFirestoreCollection<Employee>;
  constructor(public afs:AngularFirestore) { }
  
  getCollection():Observable<Employee[]>{
    this.employeesCollection = this.afs.collection('employee');
    this.employees = this.employeesCollection.valueChanges();
    return this.employees;
  }

  deleteItem(employee:Employee){
    this.employeesCollection = this.afs.collection('employee');
    this.employeesCollection.doc(employee.emp_username).delete();
  }
  
}
