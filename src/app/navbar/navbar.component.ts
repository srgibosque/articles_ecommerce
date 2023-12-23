import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  showInicio: boolean = true;
  showArticulos: boolean = false;
  showNuevoArticuloTemplate: boolean = false;
  showNuevoArticuloReactivo: boolean = false;

  showComponent(component: string): void {
    this.showInicio = component === 'inicio';
    this.showArticulos = component === 'articulos';
    this.showNuevoArticuloTemplate = component === 'nuevo-articulo-template';
    this.showNuevoArticuloReactivo = component === 'nuevo-articulo-reactivo';
  }
}
