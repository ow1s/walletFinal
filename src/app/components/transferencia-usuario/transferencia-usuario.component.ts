import { Component, OnInit } from '@angular/core';
import { TitularesService } from 'src/app/services/titulares.service';
import { MovimientosService } from 'src/app/services/movimientos.service';
import { AlertPromise } from 'selenium-webdriver';

@Component({
  selector: 'app-transferencia-usuario',
  templateUrl: './transferencia-usuario.component.html',
  styleUrls: ['./transferencia-usuario.component.css']
})
export class TransferenciaUsuarioComponent implements OnInit {

  idReceptor: number;
  fecha = new Date();
  id_tipo_de_operacion: any;
  tipo_de_operacion: any;
  costo_operacion: any;
  id_gestor = 1;
  id_usuario_origen: any;
  dniOrigen: string;
  dni: string;
  monto_operacion: any;
  valor_comision = 0;
  saldo_inicial_origen : any;
  saldo_final_origen : any;
  saldo_inicial_destino : any;
  saldo_final_destino : any;
  saldo_comprobar: any;
  saldo:any;
  constructor( public movimientosService:MovimientosService, public titularesService: TitularesService) { }

  ngOnInit() {
    this.saldo = sessionStorage.getItem("saldo");
  }


  registrarTransferencia(){
    var dni = sessionStorage.getItem('dni');
    this.dniOrigen = dni;
    var id = sessionStorage.getItem('id');
    this.id_usuario_origen = id;
    var Titular;

    if (this.dni == null || this.monto_operacion == null) {
      alert('Debe llenar los campos para realizar una transaccion.')
    }
    else {
      console.log(this.dni);
      this.titularesService.getTitularDni(this.dni).subscribe(resp => {
        console.log(resp);
        let titular = resp;
        this.idReceptor = titular.Id;
        this.saldo_inicial_destino = titular.saldo;
        this.saldo_final_destino = titular.saldo + this.monto_operacion;
        if (resp == null) {
          alert('El DNI que ingresó no pertenece a ninguna persona');
          return null;
        } else {
          console.log("Titular Encontrado")
          this.titularesService.getTitularDni(this.dniOrigen).subscribe(resp => {
            Titular = resp;
            this.saldo_inicial_origen = Titular.saldo;
            this.saldo_final_origen = Titular.saldo - this.monto_operacion;
            if (resp == null) {
              alert('Ingrese un dni correspondiente a un titular');
              return null;
            } else {
              alert('Titular encontrado');
              if (this.monto_operacion <= Titular.saldo) {
                console.log(resp);
                this.titularesService.getTipo(1).subscribe(resp => {
                  console.log(resp);
                  let tipo_operacion = resp;
                  this.id_tipo_de_operacion = tipo_operacion.Id;
                  this.tipo_de_operacion = tipo_operacion.operacion;
                  this.costo_operacion = tipo_operacion.costo;
                  let Movimiento = {
                    fecha: this.fecha,
                    id_tipo_de_operacion: this.id_tipo_de_operacion,
                    tipo_de_operacion: this.tipo_de_operacion,
                    costo_operacion: this.costo_operacion,
                    id_gestor: this.id_gestor,
                    id_usuario_origen: id,
                    id_usuario_destino: this.idReceptor,
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
                      alert('La transferencia se realizo correctamente.');
                      this.titularesService.putTitularDni(this.dniOrigen, this.saldo_final_origen).subscribe(resp => {
                        console.log(resp);
                        console.log('Se modifico!')
                        this.saldo = this.saldo - this.monto_operacion;
                      })
                      this.titularesService.putTitularDni(this.dni, this.saldo_final_destino).subscribe(resp => {
                        console.log(resp);
                        console.log('Se modifico!')
                      })
                    }
                  }, err => {
                    alert('Se Produjo un error al realizar la transferencia');
                  })
                })
              }
              else {
                alert('El monto que usted quiere enviar es mayor al saldo que posee')
              }
            }
          })
        }
      })
    }
    }
    
  }
  
