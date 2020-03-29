import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestor-index',
  templateUrl: './gestor-index.component.html',
  styleUrls: ['./gestor-index.component.css']
})
export class GestorIndexComponent implements OnInit {
  saldo:any;
  constructor() { }

  ngOnInit() {
    this.saldo = sessionStorage.getItem("saldo");
  }

}
