import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  copiarTexto() {
    navigator.clipboard.writeText('sanchez.nicolas.9917@gmail.com').then(() => {
    }).catch(err => {
    });
  }
  abrirVentanaGithub() {
    const url = 'https://github.com/Nikolo9z';
    window.open(url, '_blank');
  }
  abrirVentanaLinkedin() {
    const url = 'https://www.linkedin.com/in/nicolas-sanchez-098067279/';
    window.open(url, '_blank');
  }
}
