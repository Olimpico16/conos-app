import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PanelComponent } from '../../shared/components/panel/panel.component';

type EstadoOrden = 'Sin cortar' | 'Parcial' | 'Completado';

interface OrdenCorte {
  numero: string;
  ancho: number;
  grosor: number;
  cantidad: number;
  cortados: number;
}

@Component({
  selector: 'app-ordenes',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive, PanelComponent],
  templateUrl: './ordenes.component.html',
  styleUrl: './ordenes.component.css',
})
export class OrdenesComponent {
  operador = 'Operador';

  ordenes: OrdenCorte[] = [
    { numero: '260123', ancho: 120, grosor: 6, cantidad: 50, cortados: 0},
    { numero: '260124', ancho: 80, grosor: 10, cantidad: 30, cortados: 0 },
    { numero: '260125', ancho: 150, grosor: 6, cantidad: 40, cortados: 0},
    { numero: '260126', ancho: 60, grosor: 10, cantidad: 20, cortados: 0 },
    { numero: '260127', ancho: 100, grosor: 6, cantidad: 60, cortados: 0 },
    { numero: '260128', ancho: 75, grosor: 10, cantidad: 25, cortados: 0},
    { numero: '260159', ancho: 10, grosor: 6, cantidad: 35, cortados: 0},
    { numero: '260169', ancho: 20, grosor: 6, cantidad: 35, cortados: 0},
    { numero: '260199', ancho: 25, grosor: 6, cantidad: 35, cortados: 0},
    { numero: '260179', ancho: 37.5, grosor: 6, cantidad: 35, cortados: 0},
    { numero: '260149', ancho: 18, grosor: 6, cantidad: 35, cortados: 0},
    { numero: '260130', ancho: 90, grosor: 10, cantidad: 50, cortados: 0 },
  ];

  getEstado(orden: OrdenCorte): EstadoOrden {
    if (orden.cortados === 0) return 'Sin cortar';
    if (orden.cortados >= orden.cantidad) return 'Completado';
    return 'Parcial';
  }

  actualizarCorte(orden: OrdenCorte, valor: number | string): void {
    const cantidad = Number(valor);
    if (!Number.isFinite(cantidad)) {
      orden.cortados = 0;
      return;
    }

    orden.cortados = Math.min(orden.cantidad, Math.max(0, Math.floor(cantidad)));
  }

  get totalOrdenes(): number {
    return this.ordenes.length;
  }

  get totalCompletados(): number {
    return this.ordenes.filter(o => this.getEstado(o) === 'Completado').length;
  }

  get totalConosCortados(): number {
    return this.ordenes.reduce((total, orden) => total + orden.cortados, 0);
  }
}
