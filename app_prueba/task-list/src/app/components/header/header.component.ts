import { Component } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    title: string = "My Task list";

    showAddTask : boolean = false;
    subscription ?: Subscription; 
    
    constructor(private uiService: UiService){
      this.subscription = this.uiService.onToggle().subscribe(
        (value) => {this.showAddTask = value}
      );
    };

    toggleAddTask(){
     this.uiService.toggleAddTasks();
    };
}
