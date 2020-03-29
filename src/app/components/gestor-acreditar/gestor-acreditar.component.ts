import { Component, OnInit } from '@angular/core';
import { TitularesService } from 'src/app/services/titulares.service';
import { MovimientosService } from 'src/app/services/movimientos.service';

@Component({
  selector: 'app-gestor-acreditar',
  templateUrl: './gestor-acreditar.component.html',
  styleUrls: ['./gestor-acreditar.component.css']
})
export class GestorAcreditarComponent implements OnInit {

  //parametros para insertar un movimiento
  fecha = new Date();
  id_tipo_de_operacion: any;
  tipo_de_operacion: any;
  costo_operacion:any;
  id_gestor:any;
  id_usuario_origen:any;
  id_usuario_destino:any;
  monto_operacion:any;
  valor_comision:any;
  saldo_inicial_origen:any;
  saldo_final_origen:any;
  saldo_inicial_destino:any;
  saldo_final_destino:any;
  dni:any;
  id = 3;
  bandera: boolean;
  saldo:any;
  
  saldo_destino_final_update:any;
  constructor( public titularesService: TitularesService, public movimientoService : MovimientosService ) { }

  ngOnInit() {
    this.saldo = sessionStorage.getItem("saldo");
    
  }

  acreditarSaldo(){

    var gestor = sessionStorage.getItem("id");
    this.id_gestor = gestor;
    var bandera = this.bandera;
    if(this.dni == null && this.monto_operacion == null){
      alert('Debe llenar los campos para acreditar')
    } else {
    this.titularesService.getTitularDni(this.dni).subscribe(resp => {
      this.id_gestor = gestor;
      console.log(resp);
      let titular = resp;
      if (titular == null ){
          alert ('ingrese correctamente el dni del titular');
      } else {
           alert('titular encontrado');
           this.saldo_inicial_origen = titular.saldo;
           this.saldo_final_destino = this.saldo_inicial_origen + this.monto_operacion
           this.titularesService.getTipo(this.id).subscribe(resp => {
            console.log(resp);
            let tipo = resp;
            this.id_tipo_de_operacion = tipo.Id;
            this.tipo_de_operacion = tipo.operacion;
            this.costo_operacion = tipo.costo;
          
            let movimiento = {
              fecha: this.fecha,
              id_gestor: this.id_gestor,
              id_tipo_de_operacion : this.id_tipo_de_operacion,
              tipo_de_operacion : this.tipo_de_operacion,
              costo_operacion: this.costo_operacion,
              monto_operacion : this.monto_operacion,
              saldo_inicial_origen : this.saldo_inicial_origen,
              saldo_final_destino : this.saldo_final_destino
            };
            
            this.movimientoService.postMovimientoNuevo(movimiento).subscribe(resp => {
              console.log(resp);
              if(resp != null ){
                alert ('Operacion exitosa');
                this.titularesService.putUpdateSaldo(this.dni,this.saldo_final_destino).subscribe(resp =>{
                  console.log(resp)
                  if(resp != null){
                    alert ('Saldo modificado');
                    this.saldo = this.saldo - this.monto_operacion;
                    sessionStorage.setItem("saldo",this.saldo);
                  } else {
                    alert ('Saldo no modificado');
                  }
                })  
              } else {
                alert ('Fallo la operacion');
              }
             
            })
          })
         }
      })
    }    
  }
}
