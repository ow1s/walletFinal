import { Component, OnInit } from '@angular/core';
import { Titular } from 'src/app/model/titular';
import { TitularesService } from 'src/app/services/titulares.service';
import { RegistroTitularComponent } from '../registro-titular/registro-titular.component';
import {Router} from '@angular/router';
import { GestorAcreditarComponent } from '../gestor-acreditar/gestor-acreditar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  titular: Titular;
  nombre: string;
  apellido: string;
  email: string;
  dni: string;
  fecha_nacimiento: string;
  provincia: string;
  usuario: string;
  clave: string;
  saldo: number;
  usuarioAdmin = 'test'
  usuarioAdminPassword='test'
  constructor(public titularesService: TitularesService, private router:Router) { }
  ngOnInit() {
  }
  login(){
    let titular = {
      usuario: this.usuario,
      clave: this.clave,
      dni: this.dni
    };
      this.titularesService.postLogin(titular).subscribe(resp => {
      console.log(resp)
      if(resp == null){
        alert('Verifique usuario y contraseña');
      } else {
        if(resp !=null && titular.usuario==this.usuario){
          this.router.navigate(['indexUsuario']);
          sessionStorage.setItem("dni",resp['dni']);
          sessionStorage.setItem("id",resp['Id']);
          sessionStorage.setItem("saldo",resp['saldo']);
        } 
        if(resp != null && titular.usuario==this.usuarioAdmin && titular.clave==this.usuarioAdminPassword){
          this.router.navigate(['dash-board']);
        } 
       
    }
    
});

}
}

