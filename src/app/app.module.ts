import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserTwoComponent } from './user-two/user-two.component';
import { UserThreeComponent } from './user-three/user-three.component';
import { StudentsComponent } from './students/students.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id/:name', component: UsersComponent },
  { path: 'users/:id/edit', component: UsersComponent },
  { path: 'usertwo', component: UserTwoComponent },
  { path: 'userthree', component: UserThreeComponent },

  { path: 'students', component: StudentsComponent, children: [
    { path: ':id', component: StudentsComponent },
    { path: ':id/edit', component: EditStudentComponent }
  ] }

];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserTwoComponent,
    UserThreeComponent,
    StudentsComponent,
    EditStudentComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(appRoutes)    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
