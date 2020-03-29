import { Titular } from './titular';

export class Credito { 
    public Titular: Titular;
    public montoCredito: number;
    public interes: number;
    public totalADevolver: number;

    constructor(){

    }

    public calculoDeTotalADevolver(){
        this.totalADevolver = this.montoCredito + (this.montoCredito * this.interes);
        
    }
}