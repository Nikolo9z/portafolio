import { Component } from '@angular/core';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  constructor(private copiar:UtilsService) { }

  copiarCorreo(){
    this.copiar.copiarTexto();
  }
  abrirGithub(){
    this.copiar.abrirVentanaGithub();
  }
  abrirLinkedin(){
    this.copiar.abrirVentanaLinkedin();
  }

}
