import { Component } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  
  isLogged:boolean = false;
  experiencias: Experiencia[]=[];
  constructor(private tokenService: TokenService, private sExperiencia: ExperienciaService){}

  ngOnInit():void{
    this.sExperiencia.lista().subscribe(data => {this.experiencias = data});
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }
}
