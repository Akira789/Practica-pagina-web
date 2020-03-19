import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UsuariosService {

    URL = "https://localhost/pruebas/";

    constructor(private http: HttpClient) {}

    obtenerUsuarios(){
        return this.http.get(`${this.URL}obtenerUsuarios.php`);
    }
    aUsuario(usuario){
        return this.http.post(`${this.URL}AUsuario.php`, JSON.stringify(usuario));
    }
    bUsuario(idUsuario: number){
        return this.http.get(`${this.URL}BUsuario.php?idUsuario=${idUsuario}`);
    }

    seleccionarUsuario(idUsuario: number){
        return this.http.get(`${this.URL}SeleccionarUsuario.php?idUsuario=${idUsuario}`);
    }

    editarUsuario(usuario){
        return this.http.post(`${this.URL}EditarUsuario.php`, JSON.stringify(usuario));
    }

}