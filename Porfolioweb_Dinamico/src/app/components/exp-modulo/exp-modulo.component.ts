import { Component, Output, EventEmitter } from '@angular/core';




@Component({
  selector: 'app-exp-modulo',
  templateUrl: './exp-modulo.component.html',
  styleUrls: ['./exp-modulo.component.css']
})
export class ExpModuloComponent {
  
  id : number = null!;
  puesto : string = "";
  inicio : string = "";
  fin : string = "";
  descripcion : string = "";
  imagen : string = "";
  empresa : string = "";
  showAddExp : boolean = true;

  constructor(){}

  
  onSubmit(){
   const {id, puesto, inicio, fin, descripcion, imagen, empresa} = this;
   const newExp = {id, puesto, inicio, fin, descripcion, imagen, empresa};
  }

  toogleAddExp(){
    console.log("fincion toggleVisibilityExp ");
    this.showAddExp = !this.showAddExp;
      
  }
}
