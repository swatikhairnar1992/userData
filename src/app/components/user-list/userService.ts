import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './user';

@Injectable()
export class UsersService {
    constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get<any>('assets/users-list.json')
            .toPromise()
            .then(res => <Users[]>res.data)
            .then(data => { return data; });
    }
}