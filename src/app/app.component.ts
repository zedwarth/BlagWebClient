import { Component, OnInit } from '@angular/core';
import { UsersService } from './modules/accounts/services/users.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styles: ['']
})
export class AppComponent implements OnInit {
  constructor(private usersService: UsersService) { }

  ngOnInit() {
  this.usersService.queryUsers().subscribe(result => {
      console.log('Result: ', result);
    });
  }
}
