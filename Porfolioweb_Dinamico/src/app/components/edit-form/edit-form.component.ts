import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Experiencia } from 'src/app/model/experiencia';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent {
  @Output() onEditExp :EventEmitter<Experiencia> = new EventEmitter();

  id : number = null!;
  puesto : string = "";
  inicio : string = "";
  fin : string = "";
  descripcion : string = "";
  imagen : string = "";
  empresa : string = "";
  showEditExp : boolean = false;
  subcription? :Subscription ;
  
  constructor(private uiServ : UiService){
    this.subcription = this.uiServ.onToggleEdit().subscribe(
      (value) => {
        this.showEditExp = value});
  }

  toggleShowEditExp(){
    this.uiServ.toggleVisibilityEditExp();
    }

  onSubmitExp(){
    const {id, puesto, inicio, fin, descripcion, imagen, empresa} = this;
    const editExp = {id, puesto, inicio, fin, descripcion, imagen, empresa};
 
    this.onEditExp.emit(editExp);
   }

}
