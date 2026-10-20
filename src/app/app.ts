import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-app');
  users = DUMMY_USERS;
  selecedUserId = 'u1';
  get selectedUser() {
    return this.users.find((user) => user.id === this.selecedUserId)!;
  }  

  onSelectUser(id: string) {
    console.log('Selected user with id ' + id);
    this.selecedUserId = id;
  }
}
