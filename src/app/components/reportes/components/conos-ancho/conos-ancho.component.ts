import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conos-ancho',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="rounded-lg border border-blue-100 bg-white p-4 shadow-sm">
      <h3 class="mb-3 font-bold">Conos por ancho</h3>
      <div *ngFor="let item of anchos" class="mb-2 grid grid-cols-[64px_1fr_76px] items-center gap-2 last:mb-0">
        <span class="text-xs">{{ item.ancho }} cm</span>
        <div class="h-3.5 overflow-hidden rounded bg-slate-100"><div class="h-full rounded" [style.width.%]="item.porcentaje" [style.background]="item.color"></div></div>
        <span class="text-right text-[11px] text-slate-600">{{ item.total | number }} ({{ item.porcentaje }}%)</span>
      </div>
    </section>
  `,
})
export class ConosAnchoComponent {
  anchos = [
    { ancho: 60, total: 2180, porcentaje: 17.5, color: '#168bd0' },
    { ancho: 75, total: 2540, porcentaje: 20.4, color: '#252a2e' },
    { ancho: 80, total: 3120, porcentaje: 25, color: '#ef1724' },
    { ancho: 90, total: 2680, porcentaje: 21.5, color: '#168bd0' },
    { ancho: 100, total: 1960, porcentaje: 15.7, color: '#252a2e' },
  ];
}
