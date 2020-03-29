import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms'; 

const CudOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
};
const CudOptionsXWWForm = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'}),
};
const CudOptionsHtml = {
  headers: new HttpHeaders({ 'Content-Type': 'text/html; charset=utf-8'}),
};
@Injectable({
  providedIn: 'root'
})
export class MovimientosService{
  public urlBase = 'https://jsonplaceholder.typicode.com/users';
  public urlWallet = 'http://localhost:3000';

  constructor(public http: HttpClient) {
 }

  getMovimientos(): Observable<any> {

   return this.http.get(this.urlWallet + '/movimientos');
  }
  
  getMovimientosIdTitular(id): Observable<any> {
    return this.http.get(this.urlWallet + '/movimientos/' + id);
   }

 postMovimientoNuevo(Movimiento): Observable<any[]> {
     const parametros= {
       fecha: Movimiento.fecha,
       id_tipo_de_operacion: Movimiento.id_tipo_de_operacion, 
       tipo_de_operacion: Movimiento.tipo_de_operacion, 
       costo_operacion: Movimiento.costo_operacion,
       id_gestor: Movimiento.id_gestor, 
       id_usuario_origen: Movimiento.id_usuario_origen,
       id_usuario_destino: Movimiento.id_usuario_destino, 
       monto_operacion: Movimiento.monto_operacion, 
       valor_comision: Movimiento.valor_comision, 
       saldo_inicial_origen: Movimiento.saldo_inicial_origen, 
       saldo_final_origen: Movimiento.saldo_final_origen, 
       saldo_inicial_destino: Movimiento.saldo_inicial_destino, 
       saldo_final_destino: Movimiento.saldo_final_destino
       
     };
     const newSession = Object.assign({}, parametros);
     return this.http.post<any[]>(this.urlWallet + '/movimientos?', newSession, CudOptions);
   }

}
