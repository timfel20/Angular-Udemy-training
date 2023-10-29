import { Component } from '@angular/core';
import { UsersServiceService } from './users-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersServiceService],
})
export class AppComponent {
  newUser: { name: string, status: boolean } = {
    name: '',
    status: false
  };


  activeUsers: { name: string, status: boolean }[] = [];
  inactiveUsers: { name: string, status: boolean }[] = [];
  
  constructor(private userService: UsersServiceService){}
  ngOnInit(): void {
    this.newUser = this.userService.newUser
    this.activeUsers = this.userService.activeUsers
    this.inactiveUsers = this.userService.inactiveUsers
  }
  
}
