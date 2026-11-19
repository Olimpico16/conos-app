import { Component } from '@angular/core';

/**
 * Contenedor visual reutilizable para secciones tipo tarjeta.
 * El contenido se proyecta desde el componente que lo utiliza.
 */
@Component({
  selector: 'app-panel',
  standalone: true,
  templateUrl: './panel.component.html',
  host: {
    class: 'block rounded-lg border border-blue-100 bg-white shadow-sm',
  },
})
export class PanelComponent {}
