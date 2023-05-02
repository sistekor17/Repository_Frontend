import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTasks: boolean = false;
  private subjet = new Subject<any>();
  
  constructor() { }

  toggleAddTasks(): void{
    this.showAddTasks = !this.showAddTasks;
    this.subjet.next(this.showAddTasks);
  }

  onToggle(): Observable<any> {
    return this.subjet.asObservable();
  }
}
