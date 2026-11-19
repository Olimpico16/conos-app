import { CommonModule } from '@angular/common';
import { PanelComponent } from '../../../../shared/components/panel/panel.component';
import { Component, Input } from '@angular/core';

export interface RegistroProduccion {
  fecha: string;
  cortadora: number;
  operador: string;
  cantidad: number;
  ancho: number;
  grosor: number;
}

@Component({
  selector: 'app-lista-produccion',
  standalone: true,
  imports: [CommonModule, PanelComponent],
  templateUrl: './lista-produccion.component.html',
})
export class ListaProduccionComponent {
  @Input() registros: RegistroProduccion[] = [];
  pagina = 1;
  readonly porPagina = 10;

  get totalPaginas(): number { return Math.max(1, Math.ceil(this.registros.length / this.porPagina)); }
  get paginaActual(): RegistroProduccion[] {
    const inicio = (this.pagina - 1) * this.porPagina;
    return this.registros.slice(inicio, inicio + this.porPagina);
  }
  get inicio(): number { return this.registros.length ? (this.pagina - 1) * this.porPagina + 1 : 0; }
  get fin(): number { return Math.min(this.pagina * this.porPagina, this.registros.length); }
  get paginas(): number[] {
    const total = this.totalPaginas;
    const start = Math.max(1, Math.min(this.pagina - 2, total - 4));
    return Array.from({ length: Math.min(5, total) }, (_, i) => start + i);
  }
  cambiarPagina(p: number): void {
    if (p >= 1 && p <= this.totalPaginas) this.pagina = p;
  }
}
