import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './services/conexion.service';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  usuarios = null;
  usuario = {
    idUsuario: null,
    nombre: null,
    telefono: null,
    email: null
  }
  constructor(private usuariosServicio: UsuariosService) { }

  ngOnInit() {
    this.obtenerUsuarios();
  }
  obtenerUsuarios() {
    this.usuariosServicio.obtenerUsuarios().subscribe(
      result => this.usuarios = result
    );
  }
  hayRegistros(){
    if(this.usuarios == null){
      return false;
    } else {
      return true;
    }
  }

  aUsuario(){
    this.usuariosServicio.aUsuario(this.usuario).subscribe(
      datos => {
        if(datos['resultado'] == 'OK'){
          alert(datos['mensaje']);
          this.obtenerUsuarios();
        }
      }
    );
  }

  bUsuario(idUsuario){
    this.usuariosServicio.bUsuario(idUsuario).subscribe(
      datos => {
        if(datos['resultado'] == 'OK'){
          alert(datos['mensaje']);
          this.obtenerUsuarios();
        }
      }
    );
  }

  editarUsuario(){
    this.usuariosServicio.editarUsuario(this.usuario).subscribe(
      datos => {
        if(datos['resultado'] == 'OK'){
          alert(datos['mensaje']);
          this.obtenerUsuarios();
        }
      }
    );
  }

  seleccionarUsuario(idUsuario){
    this.usuariosServicio.seleccionarUsuario(idUsuario).subscribe(
      result => this.usuario = result[0]
    );
  }

}
