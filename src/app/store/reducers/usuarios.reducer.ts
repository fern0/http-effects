import { User } from 'src/app/models/user.model';
import * as fromUsuarios from '../actions'; //hay un index.ts por eso se coloca solo asi
export interface UsuariosState {
    users: User[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

const estadoInicial: UsuariosState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
};

export function usuariosReducer(state = estadoInicial, action: fromUsuarios.usuariosAcciones): UsuariosState {
    switch (action.type) {
        case fromUsuarios.CARGAR_USUARIOS:
            return {
                ...state,
                loading: true, //retorno el state completo pero modifico el loading
                error: null
            };
        case fromUsuarios.CARGAR_USUARIOS_SUCCESS:
            return {
                ...state, //retorno el state completo pero modifico el loaded y el loading
                loaded: true,
                loading: false,
                users: [ ...action.usuarios ]
            };
        case fromUsuarios.CARGAR_USUARIOS_FAIL:
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
