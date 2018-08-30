import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { EmployesAdminComponent } from './employes-admin/employes-admin.component';
import { RoutesRoutingModule } from './routes/routes-routing.module';
import { EmployeeListComponent } from './employes-admin/employee-list/employee-list.component';
import { AddEmployeeComponent } from './employes-admin/add-employee/add-employee.component';

import { MatInputModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import { JobTitleComponent } from './employes-admin/add-employee/job-title/job-title.component';
import { FormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { RestrictSpecialCharacters } from './restrict-characters.directive';
import { HttpClientModule } from '@angular/common/http';


const environment = {
  firebase: {
    apiKey: "AIzaSyAvbzEbQacK26Oi6f8OIZebGmdEQji1URM",
    authDomain: "livemaps-202720.firebaseapp.com",
    databaseURL: "https://livemaps-202720.firebaseio.com",
    projectId: "livemaps-202720",
    storageBucket: "livemaps-202720.appspot.com",
    messagingSenderId: "225916847152"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    EmployesAdminComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    JobTitleComponent,
    RestrictSpecialCharacters
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule, HttpClientModule,AngularFirestoreModule.enablePersistence(),AngularFireModule.initializeApp(environment.firebase),MatSlideToggleModule,ReactiveFormsModule,MatButtonToggleModule,FormsModule,MatSortModule,MatSelectModule ,RoutesRoutingModule,MatTableModule,MatButtonModule,MatFormFieldModule,MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
