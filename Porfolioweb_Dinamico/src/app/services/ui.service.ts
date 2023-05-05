import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddExp : boolean = false;
  private subjet = new Subject<any> ();
  
  constructor() { }

  //Para cambiar el valor booleano desde el componente padre hacia el componente hijo.
  toggleVisibilityExp():void{
    console.log("fincion toggleVisibilityExp ");
    this.showAddExp = !this.showAddExp;
    this.subjet.next(this.showAddExp);
  }
 // El método onToggle() devuelve un observable que notificará a los componentes que se suscriban cada vez que el valor de this.subjet cambie. De esta manera, los componentes pueden estar atentos a los cambios en el estado de un objeto y actuar en consecuencia.
  onToggle(): Observable<any> {
    return this.subjet.asObservable();
  }
}
