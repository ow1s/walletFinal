import { Injectable } from '@angular/core';


import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { clearOverrides } from '@angular/core/src/view';

const cudOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
const cudOptionsXWWForm = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};
const cudOptionsHtml = {
  headers: new HttpHeaders({ 'Content-Type': 'text/html; charset=utf-8' })
};

@Injectable({
  providedIn: 'root'
})
export class TitularesService {
  public urlBase = 'https://jsonplaceholder.typicode.com/users';
  public urlWallet = 'http://localhost:3000';

  constructor(public http: HttpClient) { 

  }

  getTitulares(): Observable<any>{
    return this.http.get(this.urlWallet + '/titulares');
  }

  public getJSON(): Observable<any> {
    return this.http.get('./assets/test.json');
  }

  postTitularNuevo(titular): Observable<any[]> {
    const parametros = {
      nombre: titular.nombre,
      apellido: titular.apellido,
      dni: titular.dni,
      email: titular.email,
      fecha_nacimiento: titular.fecha_nacimiento,
      provinciaUbicacion: titular.provinciaUbicacion,
      usuario: titular.usuario,
      clave: titular.clave,
      saldo: titular.saldo
    };
    const newSession = Object.assign({}, parametros);
    return this.http.post<any[]>(this.urlWallet + '/titulares?', newSession, cudOptions);
  }
  

  getTitularDni(dni): Observable<any>{
    const parametro = {
      dni:dni
    };

    const newSession = Object.bind({}, parametro);
    return this.http.get<any[]>(this.urlWallet + '/titulares/dni/' + dni);
  }



 postLogin(titular): Observable<any[]>{
   const parametros = {
     usuario: titular.usuario,
     clave: titular.clave,
     dni: titular.dni
   };
   const newSession = Object.assign({},parametros);
   return this.http.post<any[]>(this.urlWallet+ '/titulares/login?',newSession,cudOptions);
 }

 getTipo(id): Observable<any>{
  
  return this.http.get(this.urlWallet + '/tipoDeOperacion/'+ id);
}

getGestores(): Observable<any>{
  return this.http.get(this.urlWallet + '/gestores');
}

putUpdateSaldo(dni,saldo): Observable<any>{
  
  const parametros = {
    saldo: saldo
  }
  const newSession = Object.assign({},parametros);
  return this.http.put<any>(this.urlWallet + '/titulares/dni/' + dni, newSession,cudOptions);
}

putTitularDni(dni, saldo): Observable<any>{
    
  const parametro = {
    saldo:saldo
  }
  const newSession = Object.assign({}, parametro);
  return this.http.put<any>(this.urlWallet + '/titulares/dni/' + dni, newSession, cudOptions);
}

}

