import { Component, OnInit } from '@angular/core';
import { MovimientosService } from 'src/app/services/movimientos.service';

@Component({
  selector: 'app-lista-movimientos',
  templateUrl: './lista-movimientos.component.html',
  styleUrls: ['./lista-movimientos.component.css']
})
export class ListaMovimientosComponent implements OnInit {
  movimientos: any[];

  constructor( public movimientoService :  MovimientosService) { }

  ngOnInit() {
    this.movimientoService.getMovimientos().subscribe(resp=>{
      console.log(resp);
      this.movimientos = resp;
    })
  }

  elegir(indice: string){
    console.log(indice);
    console.log(this.movimientos[indice]);
  }
  
}
