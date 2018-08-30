import { NgModule } from '@angular/core';
import { Routes, RouterModule, ROUTER_CONFIGURATION } from '@angular/router';
import { EmployesAdminComponent } from '../employes-admin/employes-admin.component';
import { AddEmployeeComponent } from '../employes-admin/add-employee/add-employee.component';

import { EmployeeListComponent } from '../employes-admin/employee-list/employee-list.component';

const routes: Routes = [
  {
    path:'employee', component:EmployesAdminComponent, children:[
      {
        path:'add', component:AddEmployeeComponent
      },
      {
        path:'list', component:EmployeeListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
