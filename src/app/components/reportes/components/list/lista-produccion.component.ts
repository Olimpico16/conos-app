import { CommonModule } from '@angular/common';
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
  imports: [CommonModule],
  template: `
    <section class="overflow-hidden rounded-lg border border-blue-100 bg-white p-3 shadow-sm sm:p-4">
      <h3 class="mb-3 text-lg font-bold">Detalle de producción</h3>
      <div class="overflow-x-auto rounded-md border border-blue-100">
        <table class="w-full min-w-[720px] border-collapse text-left text-xs sm:text-[13px]">
          <thead class="bg-slate-50 text-[#102b50]">
            <tr class="border-b border-blue-100">
              <th rowspan="2" class="px-3 py-3"></th><th rowspan="2" class="px-3 py-3">Fecha</th><th rowspan="2" class="px-3 py-3">Cortadora</th><th rowspan="2" class="px-3 py-3">Operador</th><th rowspan="2" class="px-3 py-3 text-right">Cantidad</th><th colspan="2" class="px-3 py-2 text-center">Conos (medidas)</th><th rowspan="2" class="px-3 py-3 text-right">Total</th>
            </tr>
            <tr class="border-b border-blue-100"><th class="px-3 py-2 text-right">Ancho (cm)</th><th class="px-3 py-2 text-right">Grosor (mm)</th></tr>
          </thead>
          <tbody>
            <tr *ngFor="let item of paginaActual; let i = index" class="border-b border-slate-100 last:border-0 hover:bg-blue-50/60">
              <td class="px-3 py-2.5 text-base">›</td><td class="whitespace-nowrap px-3 py-2.5">{{ item.fecha }}</td><td class="px-3 py-2.5">{{ item.cortadora }}</td><td class="whitespace-nowrap px-3 py-2.5">{{ item.operador }}</td><td class="px-3 py-2.5 text-right">{{ item.cantidad | number }}</td><td class="px-3 py-2.5 text-right">{{ item.ancho }}</td><td class="px-3 py-2.5 text-right">{{ item.grosor }}</td><td class="px-3 py-2.5 text-right">{{ item.cantidad | number }}</td>
            </tr>
            <tr *ngIf="paginaActual.length === 0"><td colspan="8" class="px-3 py-8 text-center text-slate-500">No hay registros para los filtros seleccionados.</td></tr>
          </tbody>
        </table>
      </div>
      <div class="mt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
        <span>Mostrando {{ inicio }} - {{ fin }} de {{ registros.length }} registros</span>
        <div class="flex items-center gap-1">
          <button (click)="cambiarPagina(pagina - 1)" [disabled]="pagina === 1" class="h-9 w-9 rounded-md border border-blue-100 hover:bg-blue-50 disabled:opacity-40">‹</button>
          <button *ngFor="let p of paginas" (click)="cambiarPagina(p)" [class.bg-sky-600]="pagina === p" [class.text-white]="pagina === p" class="h-9 min-w-9 rounded-md border border-blue-100 px-2 hover:bg-blue-50" [class.hover:text-[#102b50]]="pagina === p">{{ p }}</button>
          <button (click)="cambiarPagina(pagina + 1)" [disabled]="pagina >= totalPaginas" class="h-9 w-9 rounded-md border border-blue-100 hover:bg-blue-50 disabled:opacity-40">›</button>
        </div>
      </div>
    </section>
  `,
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
