import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAll } from '../../selectors/user.selectors';
import { Observable } from 'rxjs/internal/Observable';
import { Users } from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users$: Observable<Users>;

  constructor(private store: Store<any>) {
    this.users$ = this.store.select(selectAll);
  }
}
