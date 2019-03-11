import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as usuarioActions from 'src/app/store/actions';
import { User } from 'src/app/models/user.model';

@Component({
    selector: 'app-usuario',
    templateUrl: './usuario.component.html',
    styles: []
})
export class UsuarioComponent implements OnInit {
    usuario: User;
    loading: boolean;
    error: any;
    constructor(private router: ActivatedRoute, private store: Store<AppState>) {}

    ngOnInit() {
        this.store.select('usuario').subscribe((usuario) => {
            this.usuario = usuario.user;
            this.error = usuario.error;
            this.loading = usuario.loading;
        });
        this.router.params.subscribe((params) => {
            const id = params['id'];
            console.log(id);
            this.store.dispatch(new usuarioActions.CargarUsuario(id));
        });
    }
}
