import { Component, OnInit } from '@angular/core';
import { TitularesService } from 'src/app/services/titulares.service';
import { Titular } from 'src/app/model/titular';

@Component({
  selector: 'app-listado-titulares',
  templateUrl: './listado-titulares.component.html',
  styleUrls: ['./listado-titulares.component.css']
})
export class ListadoTitularesComponent implements OnInit {
  titulares:any[];
  titular: Titular;
  dni: string;
  
  constructor(private titularesService: TitularesService) { }

  ngOnInit() {
    this.titularesService.getTitulares().subscribe(response => {
      console.log(response);
      this.titulares=response;
    })
  }
  subscribe

  elegir(indice: string){
    console.log(indice);
    console.log(this.titulares[indice]);
  }

  buscarDni(){
    let titular = {
      dni: this.dni
    };

    this.titularesService.getTitularDni(titular).subscribe(resp =>{
      console.log(resp);
      if(!resp){
        alert ('no se encontro')
      }
      }, err => {
        alert ('se encontro')
      }
    );
  }
}    





