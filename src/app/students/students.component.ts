import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: { id: number; name: string; status: boolean; }[] = [];

  constructor(
    private studentsService: UsersService, 
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //to retieve the id from router and assign it to the getUsers parameter
    const id = this.route.snapshot.params['id']
    this.students = this.studentsService.getUsers(id)

    //to listen to changes in the id 
    this.route.params
    .subscribe(
      (params: Params) => {
        this.students = this.studentsService.getUsers(+params['id'])
      }
    );
  }

  onEdit(id: number){
    this.router.navigate([id, 'edit'], {relativeTo: this.route})
  }

}
