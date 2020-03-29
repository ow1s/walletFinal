import { Component, OnInit } from '@angular/core';
import { MovimientosService } from 'src/app/services/movimientos.service';

@Component({
  selector: 'app-movimientos-usuario',
  templateUrl: './movimientos-usuario.component.html',
  styleUrls: ['./movimientos-usuario.component.css']
})
export class MovimientosUsuarioComponent implements OnInit {
  movimientosTitular:Array<any[]>;
  saldo: any;
  id:any;
  constructor(public movimientosService: MovimientosService) { }

  ngOnInit() {
    this.saldo = sessionStorage.getItem("saldo");
    this.id= sessionStorage.getItem('id');
    console.log(this.id);
    this.movimientosService.getMovimientosIdTitular(this.id).subscribe(resp => {
      console.log(resp);
      this.movimientosTitular = resp;
      if (resp == null){
        console.log('No se encontraron movimientos');
      } else {
        console.log('Listado de sus movimientos');
      }
    })
  }

}
