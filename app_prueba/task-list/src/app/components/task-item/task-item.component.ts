import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Task } from 'src/app/interface-tasks';
import { TASKS } from 'src/app/mock-tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task: Task = TASKS[0]
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() ontoggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  onDelete(task: Task){
    //Esta funcion le va a pasar al componente padre a través de el output la task a elmininar
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task){
    
    this.ontoggleReminder.emit(task);
  }
}

