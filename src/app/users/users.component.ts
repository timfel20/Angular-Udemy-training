import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: {id: number, name: string} = {id: 0, name: ''}
  paramSubscription!: Subscription

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private usersService: UsersService
    ) { }

    getUser = this.usersService.getUser(1)
    udd = this.usersService.getUsers
    
  ngOnInit(): void {
   /*  this.users = {
      id: this.router.snapshot.params['id'],
      name: this.router.snapshot.params['name'],
    } */
    /* a better way to do this, most especially if the pocess could be async i.e the router waiting for these 2 values to exist or 
    be loaded before it diplays them as the brower path, using param is a good aproach. Params is for async functionlities and you 
    subscrbe to it 
    Note: querParamas and fragments are observables too, yo an subsribe to them to get their data 
    */

    this.paramSubscription = this.route.params
    .subscribe(
      (params: Params) => {
        this.users.id = params['id'],
        this.users.name = params['name']
      }
    )
    console.log(this.getUser);
    
    
  }
  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe()
   
  }

  onNavigate(id:number){
    this.router.navigate(['/users', id, 'edit'], {queryParams: {allowEdit : id}, fragment: 'loading'})
  }
}
