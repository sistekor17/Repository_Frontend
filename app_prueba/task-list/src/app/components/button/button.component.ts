import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  // Esto serian los atributos de la clase ButtonComponent
  @Input() text: string = "";
  @Input() color: string = "";

  @Output() onBtnClick = new EventEmitter();  
  
  btnClick(){
    this.onBtnClick.emit();
  };
}
