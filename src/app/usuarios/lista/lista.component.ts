import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { User } from 'src/app/models/user.model';

@Component({
    selector: 'app-lista',
    templateUrl: './lista.component.html',
    styles: []
})
export class ListaComponent implements OnInit {
    usuarios;
    constructor(public ususarioSrv: UsuarioService) {}

    ngOnInit() {
        this.ususarioSrv.getUsuarios().subscribe((data: User[]) => {
            console.log(data);
            this.usuarios = data;
            //this.usuarios = r;
        });
    }
}
