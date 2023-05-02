import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../interface-tasks';
import { TASKS } from '../mock-tasks';
//Con esto se le indica a la base de datos que se le esta enviando un archivo de tipo json.
const httpOptions ={
  headers: new HttpHeaders({
  'content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // Url donde esta alojada nuestra la base de datos
  private apiUrl = 'http://localhost:5000/tasks';
  
  constructor(private http:HttpClient) { }
  // Este servicio nos va a permitir hacer el CRUD de las tareas.
  //En esta funcion se le va a solicitar a la base la lista  de tasks
  // El getTasks es un metodo asincronico esto quiere decir que es un metodo "observable" para definir este metodo se importa la librilla observable y se encierra la funcion observable <funcion>
  // npm run server
  
  getTasks(): Observable<Task[]> { 
    return this.http.get<Task[]>(this.apiUrl);
  }
  // Servicio para añadir una tarea 
  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  };

  deleteTasks(task:Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url);
  }
  //Servicio para cambiar el booleano
  updateTaskReminder(task:Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url, task, httpOptions);
  };
  
}
