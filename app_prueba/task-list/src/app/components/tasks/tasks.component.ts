import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interface-tasks';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService)
  {}
  ngOnInit(): void{
    //like a promise
    this.taskService.getTasks().subscribe((tasks)=> (this.tasks = tasks));
  };
  deleteTask(task: Task){
    this.taskService.deleteTasks(task)
      .subscribe(
        ()=> (
           this.tasks = this.tasks.filter((t)=>{
            return t.id !== task.id;
          })
        ));
  }
  toggleReminder(task : Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  };
  addTask(task: Task){
    this.taskService.addTask(task).subscribe(
      (task: Task) => {this.tasks.push(task)}
    );
  }
}
