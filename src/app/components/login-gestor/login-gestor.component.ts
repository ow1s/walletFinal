import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestorService } from 'src/app/services/gestor.service';
import { Gestor } from 'src/app/model/gestor';
import { TitularesService } from 'src/app/services/titulares.service';

@Component({
  selector: 'app-login-gestor',
  templateUrl: './login-gestor.component.html',
  styleUrls: ['./login-gestor.component.css']
})
export class LoginGestorComponent implements OnInit {
  gestor: Gestor;
  usuario: string;
  clave: string;

  constructor(public gestorService: GestorService, private router:Router) { }

  ngOnInit() {
  }

loginGestor(){
  let gestor = {
    usuario: this.usuario,
    clave: this.clave
  };
  this.gestorService.postLoginGestor(gestor).subscribe(resp => {
    console.log(resp);
    if (resp == null){
      alert('Verifique usuario y contraseña');
      alert('Acesso permitido solo para gestores');
    } else {
      if(resp != null && gestor.usuario==this.usuario && gestor.clave==this.clave){
        this.router.navigate(['gestorIndex']);
        sessionStorage.setItem("id",resp['Id']);
        sessionStorage.setItem("saldo",resp['saldo']);
        
      }
    }
  });
}
}
