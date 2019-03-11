import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as usuarioActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';
@Injectable()
export class UsuarioEffects {
    //un efecto escucha acciones que son enviadas al store
    constructor(private actions$: Actions, public usuariosSrv: UsuarioService) {}

    @Effect() //{ dispatch: false }
    cargarUsuario$ = this.actions$
        .pipe(
            //cuando se dispare esta accion en particular yo voy a ejecutar este observable
            ofType(usuarioActions.CARGAR_USUARIO)
        )
        .pipe(
            switchMap((action: usuarioActions.CargarUsuario) => {
                //->switchmap cancela eñobservable anterior y tenemos que regresar un nuevo observable con los datos del servicio REST
                return this.usuariosSrv.getUserById(action.id).pipe(
                    map((user) => new usuarioActions.CargarUsuarioSuccess(user)), //-> necesito el map porque tengo que llamar a la accion
                    catchError((error) => of(new usuarioActions.CargarUsuarioFail(error))) //el of es porque debe regresar un observable
                );
            })
            //manejo en caso de error
        );
}
