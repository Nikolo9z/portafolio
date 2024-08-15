import { Component } from '@angular/core';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  constructor(private copiar:UtilsService) { }

  copiarCorreo(){
    this.copiar.copiarTexto();
  }
  abrirGithub(){
    this.copiar.abrirVentanaGithub();
  }
  abrirLinkedIn(){
    this.copiar.abrirVentanaLinkedin();
  }
}
