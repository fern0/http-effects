import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import { of } from 'rxjs';
@Injectable()
export class UsuariosEffects {
    //un efecto escucha acciones que son enviadas al store
    constructor(private actions$: Actions, public usuariosSrv: UsuarioService) {}

    @Effect() //{ dispatch: false }
    cargarUsuarios$ = this.actions$
        .pipe(
            //cuando se dispare esta accion en particular yo voy a ejecutar este observable
            ofType(usuariosActions.CARGAR_USUARIOS)
        )
        .pipe(
            switchMap(() => {
                //->switchmap cancela eñobservable anterior y tenemos que regresar un nuevo observable con los datos del servicio REST
                return this.usuariosSrv.getUsuarios().pipe(
                    map((users) => new usuariosActions.CargarUsuariosSuccess(users)), //-> necesito el map porque tengo que llamar a la accion
                    catchError((error) => of(new usuariosActions.CargarUsuariosFail(error))) //el of es porque debe regresar un observable
                );
            })
            //manejo en caso de error
        );
}
