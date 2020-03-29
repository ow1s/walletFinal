import { Component, OnInit } from '@angular/core';
import { Titular } from 'src/app/model/titular';
import {FormsModule} from '@angular/forms';
import { TitularesService } from 'src/app/services/titulares.service';

@Component({
  selector: 'app-registro-titular',
  templateUrl: './registro-titular.component.html',
  styleUrls: ['./registro-titular.component.css']
})
export class RegistroTitularComponent implements OnInit {
  titular: Titular;
  nombre: string;
  apellido: string;
  email: string;
  dni: string;
  fecha_nacimiento: string;
  provincia: string;
  usuario: string;
  clave: string;
  saldo = 0;


  //Directivas
  provincias: any = [
    {nombre: 'Jujuy'},
    {nombre: 'Salta'},
    {nombre: 'Tucuman'},
    {nombre: 'Cordoba'},
    {nombre: 'Buenos Aires'},
    {nombre: 'Neuquen'},
    {nombre: 'Tierra del Fuego'},
    {nombre:'Formosa'},
    {nombre:'Entre Rios'},
    {nombre:'La Pampa'},
    {nombre:'Misiones'},
    {nombre:'Neuquen'},
    {nombre:'Rio Negro'},
    {nombre:'Santa Fe'},
    {nombre:'La Rioja'},
    {nombre:'Chubut'}
  ]

  constructor(public titularesService: TitularesService) { }

  ngOnInit() {
  }

  onChange(event:any){
    console.log(event.target.value);
    this.provincia=event.target.value;
  }

  guardar(){
    let titular = {
      nombre: this.nombre,
      apellido: this.apellido,
      dni: this.dni,
      email: this.email,
      fecha_nacimiento: this.fecha_nacimiento,
      provinciaUbicacion: this.provincia,
      usuario: this.usuario,
      clave: this.clave,
      saldo: this.saldo
    };
    if( titular.nombre == null && titular.apellido == null && titular.dni == null && titular.email == null && titular.fecha_nacimiento == null && titular.provinciaUbicacion == null && titular.usuario == null && titular.clave == null){
      alert('Debe completar todos los campos');
    } else {
       this.titularesService.postTitularNuevo(titular).subscribe(resp => {
         console.log(resp);
         if(resp == null ){
          alert('Se produjo un error')
        } else {
          alert ('Ya puedes iniciar sesion');
        }
       })
    }
}

}
  