import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from
'@angular/fire/database';
import { environment } from '../environments/environment';

const routes: Routes = [
{ path: 'add-student', component: AddStudentComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
