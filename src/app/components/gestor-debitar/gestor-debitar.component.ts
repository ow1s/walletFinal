import { Component, OnInit } from '@angular/core';
import { TitularesService } from 'src/app/services/titulares.service';
import { GestorService } from 'src/app/services/gestor.service';
import { MovimientosService } from 'src/app/services/movimientos.service';

@Component({
  selector: 'app-gestor-debitar',
  templateUrl: './gestor-debitar.component.html',
  styleUrls: ['./gestor-debitar.component.css']
})
export class GestorDebitarComponent implements OnInit {
  fecha = new Date();
  id_tipo_de_operacion: any;
  tipo_de_operacion: any;
  costo_operacion: any;
  id_gestor: any;
  id_usuario_origen: any;
  id_usuario_destino: any;
  dni: string;
  monto_operacion: any;
  valor_comision = 0;
  saldo_inicial_origen: 0;
  saldo_final_origen: 0;
  saldo_inicial_destino: any;
  saldo_final_destino: any;
  saldo:any;
  constructor( public titularesService : TitularesService, public gestoresService: GestorService, public movimientosService: MovimientosService , public gestorService: GestorService) { }

  ngOnInit() {
    this.saldo = sessionStorage.getItem("saldo");
  }

  registrarDebito(){
    var id = sessionStorage.getItem("id");
    
    if (this.dni == null || this.monto_operacion == null) {
      alert('Debe llenar los campos para debitar.');
    }
    else {
      this.titularesService.getTitularDni(this.dni).subscribe(resp => {
        console.log(resp);
        let titular = resp;
        if (resp == null) {
          alert('El dni que ingresó no corresponde a ningun titular en el sistema')
        }
        else {
          console.log('Titular encontrado: ' + titular.nombre)
          if (this.monto_operacion <= titular.saldo) {
            this.id_usuario_destino = titular.Id;
            this.saldo_inicial_destino = titular.saldo;
            this.saldo_final_destino = titular.saldo - this.monto_operacion;
            this.gestorService.getGestoresId(id).subscribe(resp => {
              let gestor = resp;
              this.id_gestor = id;
              var saldoGestorFinal = gestor.saldo - this.monto_operacion;
                if (this.monto_operacion <= gestor.saldo) {


                  this.titularesService.getTipo(2).subscribe(resp => {
                    console.log(resp);
                    let operacion = resp;
                    this.id_tipo_de_operacion = operacion.Id;
                    this.tipo_de_operacion = operacion.operacion;
                    this.costo_operacion = operacion.costo;
                    let Movimiento = {
                      fecha: this.fecha,
                      id_tipo_de_operacion: this.id_tipo_de_operacion,
                      tipo_de_operacion: this.tipo_de_operacion,
                      costo_operacion: this.costo_operacion,
                      id_gestor: this.id_gestor,
                      id_usuario_origen: null,
                      id_usuario_destino: this.id_usuario_destino,
                      monto_operacion: this.monto_operacion,
                      valor_comision: this.valor_comision,
                      saldo_inicial_origen: this.saldo_inicial_origen,
                      saldo_final_origen: this.saldo_final_origen,
                      saldo_inicial_destino: this.saldo_inicial_destino,
                      saldo_final_destino: this.saldo_final_destino
                    };
                    this.movimientosService.postMovimientoNuevo(Movimiento).subscribe(resp => {
                      console.log(resp);
                      if (resp['ok']) {
                        alert('Se debitó exitosamente!');
                        this.titularesService.putTitularDni(this.dni, this.saldo_final_destino).subscribe(resp => {
                          console.log(resp);
                          this.saldo = this.saldo - this.monto_operacion;
                          sessionStorage.setItem("saldo",this.saldo);
                          console.log('Se modificó el titular!');
                        })
                        this.gestoresService.putGestorIdLogin(this.id_gestor, saldoGestorFinal).subscribe(resp => {
                          console.log(resp);
                          console.log('Se modifico el gestor')
                        })
                      }


                    }), err => {
                      alert('Se produjo un error al debitar')
                    }


                  })
                } else {
                  alert('el monto a debitar es mayor que su Saldo')
                }
            })
          } else {
            alert('El monto a debitar es mayor saldo que posee el titular')
          }

        }


      })

    }




  }

  }

