import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produccion-operador',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="rounded-lg border border-blue-100 bg-white p-4 shadow-sm">
      <h3 class="mb-4 flex items-center gap-2 font-bold"><span class="text-lg">♟</span> Producción por operador</h3>
      <div *ngFor="let op of operadores" class="mb-3 grid grid-cols-[16px_92px_1fr_42px] items-center gap-2 last:mb-0">
        <span class="text-sm">♟</span><span class="truncate text-xs">{{ op.nombre }}</span>
        <div class="h-4 overflow-hidden rounded bg-slate-100"><div class="h-full rounded" [style.width.%]="op.valor / 3510 * 100" [style.background]="op.color"></div></div>
        <span class="text-right text-xs">{{ op.valor | number }}</span>
      </div>
    </section>
  `,
})
export class ProduccionOperadorComponent {
  operadores = [
    { nombre: 'Javier Garcia', valor: 3510, color: '#ef1724' },
    { nombre: 'Diego Gomez', valor: 3040, color: '#168bd0' },
    { nombre: 'Marcial Acosta', valor: 2870, color: '#252a2e' },
    { nombre: 'Pedro Jalabe', valor: 2330, color: '#2d9cdb' },
  ];
}
