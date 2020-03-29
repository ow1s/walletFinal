import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
export class GestorService {

  public urlBase = 'https://jsonplaceholder.typicode.com/users';
  public urlWallet = 'http://localhost:3000';

  constructor(public http: HttpClient) { 

  }

  getGestores():Observable<any>{
    return this.http.get(this.urlWallet + '/gestores');
  }

  public getJSON(): Observable<any> {
    return this.http.get('./assets/test.json');
  }
 getGestoresId(id): Observable<any>{
   const parametros = {
     id: id
   }
   const newSesion = Object.assign({},parametros);
   return this.http.get<any[]>(this.urlWallet + '/gestores/'+ id);
 }
 putGestorIdLogin(id,saldo): Observable<any>{
   const parametros = {
     saldo: saldo
   }
   const newSesion = Object.assign({},parametros);
   return this.http.put(this.urlWallet + '/gestores/id/' + id,newSesion);

 }
  postLoginGestor(gestor): Observable<any[]>{
    const parametros = {
      usuario: gestor.usuario,
      clave: gestor.clave
    };

    const newSesion = Object.assign({},parametros);
    return this.http.post<any[]>(this.urlWallet + '/gestor/login?',newSesion,cudOptions);
  }
}
