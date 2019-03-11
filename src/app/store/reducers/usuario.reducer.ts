import { User } from 'src/app/models/user.model';
import * as fromUsuario from '../actions'; //hay un index.ts por eso se coloca solo asi
export interface UsuarioState {
    user: User;
    loaded: boolean;
    loading: boolean;
    error: any;
}

const estadoInicial: UsuarioState = {
    user: null,
    loaded: false,
    loading: false,
    error: null
};

export function usuarioReducer(state = estadoInicial, action: fromUsuario.usuarioAcciones): UsuarioState {
    switch (action.type) {
        case fromUsuario.CARGAR_USUARIO:
            return {
                ...state,
                loading: true, //retorno el state completo pero modifico el loading
                error: null
            };
        case fromUsuario.CARGAR_USUARIO_SUCCESS:
            return {
                ...state, //retorno el state completo pero modifico el loaded y el loading
                loaded: true,
                loading: false,
                user: { ...action.usuario }
            };
        case fromUsuario.CARGAR_USUARIO_FAIL:
            return {
                ...state,
                loaded: false,
                loading: false,
                error: {
                    //objeto con el error
                    status: action.payload.status,
                    message: action.payload.message,
                    url: action.payload.url
                }
            };
        default:
            return state;
    }
}
