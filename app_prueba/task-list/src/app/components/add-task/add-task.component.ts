import { Component, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/interface-tasks';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask : EventEmitter<Task> = new EventEmitter();

  text : string = "";
  day : string = "";
  reminder : boolean = false;
  showAddTask : boolean = false;
  subscription ?: Subscription; 


  constructor(private uiService : UiService) {
    this.subscription = this.uiService.onToggle().subscribe(
      (value) => {this.showAddTask = value}
    );
  };
  
  // Emit task generated
  onSubmit()
  {
    if(this.text.length === 0 || this.day.length === 0){
      alert("Please add task & day");
    }

  // const newTask = {
  //   text: this.text,
  //   day: this.day,
  //   reminder :this.reminder
  // }; es lo mismo que:

   const {text, day, reminder} = this;
   const newTask = {text, day, reminder};
  
   this.onAddTask.emit(newTask);
  }
}
