import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { InicioComponent } from '../inicio/inicio.component';
import { ProyectosComponent } from "../proyectos/proyectos.component";
import { ExperienciaComponent } from "../experiencia/experiencia.component";
import { SobremiComponent } from "../sobremi/sobremi.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, InicioComponent, ProyectosComponent, ExperienciaComponent, SobremiComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
