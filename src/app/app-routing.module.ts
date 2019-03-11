import { NgModule } from '@angular/core';

import { ListaComponent } from './usuarios/lista/lista.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    {
        path: 'home',
        component: ListaComponent
    },
    {
        path: 'usuario/:id',
        component: UsuarioComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ], //este es el archivo de rutas principal
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
