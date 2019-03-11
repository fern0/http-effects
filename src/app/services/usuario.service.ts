import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    private url = 'https://reqres.in/api/';
    constructor(private http: HttpClient) {}

    getUsuarios() {
        return this.http.get(`${this.url}users?per_page=6`).pipe(map((resp) => resp['data'])); //&delay=1 simular demora en la respuesta del servicio REST
    }

    getUserById(id: string) {
        return this.http.get(`${this.url}users/${id}`).pipe(map((resp) => resp['data']));
    }
}
