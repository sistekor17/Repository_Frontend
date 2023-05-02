import { Component} from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { ProfilesService } from 'src/app/services/profiles.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  persona : Persona = new Persona("","","","","","","");

  constructor(public profilesService : ProfilesService ){}

  ngOnInit(): void{
    this.profilesService.getPersona().subscribe(data =>{this.persona = data});
    console.log();
  }

}
