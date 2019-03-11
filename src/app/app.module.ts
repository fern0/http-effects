import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//modulos personalizados
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios.module';

//rutas de la app
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, AppRoutingModule, HttpClientModule, SharedModule, UsuariosModule ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
