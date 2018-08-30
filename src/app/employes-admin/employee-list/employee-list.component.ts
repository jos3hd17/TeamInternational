import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { ListService } from './list.service';
import { Employee } from '../models/Employee';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [ListService]
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'age', 'username', 'hire', 'symbol'];
 
  @ViewChild(MatSort) sort: MatSort;
  employeesList:Employee[]=[];
   dataSource = new MatTableDataSource(this.employeesList);

  constructor(private router: Router, private listService: ListService) { }

  ngOnInit() {
    sessionStorage.clear();
    this.listService.getCollection().subscribe(t => {
      this.employeesList = t;
     this.dataSource = new MatTableDataSource(this.employeesList);
      console.log(this.employeesList);
    });
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  edit(element) {
    sessionStorage.setItem("item", JSON.stringify(element));
    this.router.navigate(['employee/add']);
  }
  view(element){
    sessionStorage.setItem("view", JSON.stringify(element));
    this.router.navigate(['employee/add']);
  }
  delete(element){
    this.listService.deleteItem(element);
  }
  add() {
    this.router.navigate(['employee/add']);
  }

}
