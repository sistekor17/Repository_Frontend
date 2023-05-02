import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  
  apiURL = 'http://localhost:8080/persona';

  constructor(private http:HttpClient) { }

   public getPersona(): Observable<Persona> {

      return this.http.get<Persona>(this.apiURL + '/detail/1');
   }

   



}
