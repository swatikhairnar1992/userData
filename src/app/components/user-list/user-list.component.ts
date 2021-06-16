import { Component, OnInit } from '@angular/core';

// service for to fetch dummy json from file which is present in asset folder
import { UsersService } from './userService';

// user interface
import { Users } from './user';

// for showing toaster/ confirmation box
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  // variables for edit form
  userDialog: boolean = false;
  submitted: boolean = false;

  // variable declaration and initalization
  users: Users[] = [];
  users2: Users[] = [];
  user: any = {};
  clonedUsers: { [s: string]: Users; } = {};

  constructor(
    private usersService: UsersService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.usersService.getUsers().then((data) => {
      this.users = data;
    });
  }

  openNew() {
    this.user = {};
    this.submitted = false;
    this.userDialog = true;
  }

  editUser(user: any) {
    this.user = { ...user };
    this.userDialog = true;
  }

  deleteUser(user: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + user.firstName + ' ' + user.lastName + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.users = this.users.filter(val => val.id !== user.id);
        this.user = {};
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'User Deleted', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.userDialog = false;
    this.submitted = false;
  }

  saveUser() {
    this.submitted = true;
    if (this.user.firstName.trim()) {
      if (this.user.id) {
        this.users[this.findIndexById(this.user.id)] = this.user;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'User Updated', life: 3000 });
      }
      else {
        this.user.id = this.createId();
        this.user.image = 'user-placeholder.svg';
        this.users.push(this.user);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'User Created', life: 3000 });
      }

      this.users = [...this.users];
      this.userDialog = false;
      this.user = {};
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
}
