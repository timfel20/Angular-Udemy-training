import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  student!: { id: number; name: string; status: boolean; };

  constructor( private studentsService: UsersService, private route: ActivatedRoute  ) { }

  

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id']
    const user = this.studentsService.getUser(id);

    if (user !== undefined) {
      this.student = user;
    }
  }

}
