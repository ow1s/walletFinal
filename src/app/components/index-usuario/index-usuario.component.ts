import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-usuario',
  templateUrl: './index-usuario.component.html',
  styleUrls: ['./index-usuario.component.css']
})
export class IndexUsuarioComponent implements OnInit {
  saldo: any;
  constructor() { }

  ngOnInit() {
    this.saldo = sessionStorage.getItem("saldo");
  }

}
