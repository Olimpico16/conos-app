import { Component } from '@angular/core';

@Component({
  selector: 'app-indicadores',
  standalone: true,
  template: `
    <section class="grid gap-3 sm:grid-cols-2 2xl:grid-cols-4">
      <article class="flex items-center gap-4 rounded-lg border border-blue-100 bg-white p-4 shadow-sm">
        <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-red-600 text-2xl text-white">▦</div>
        <div><p class="text-sm font-medium">Total de días</p><p class="text-3xl font-extrabold">7</p><p class="mt-1 text-xs text-slate-500">20/05/2025 - 26/05/2025</p></div>
      </article>
      <article class="flex items-center gap-4 rounded-lg border border-blue-100 bg-white p-4 shadow-sm">
        <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sky-600 text-2xl text-white">✂</div>
        <div><p class="text-sm font-medium">Total de conos producidos</p><p class="text-3xl font-extrabold">12,480</p><p class="mt-1 text-xs text-slate-500">En todas las cortadoras</p></div>
      </article>
      <article class="flex items-center gap-4 rounded-lg border border-blue-100 bg-white p-4 shadow-sm">
        <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25282b] text-2xl text-white">♟</div>
        <div><p class="text-sm font-medium">Operadores</p><p class="text-3xl font-extrabold">4</p><p class="mt-1 text-xs text-slate-500">Activos en el periodo</p></div>
      </article>
      <article class="flex items-center gap-4 rounded-lg border border-blue-100 bg-white p-4 shadow-sm">
        <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-red-600 text-2xl text-white">▣</div>
        <div><p class="text-sm font-medium">Cortadoras</p><p class="text-3xl font-extrabold">10</p><p class="mt-1 text-xs text-slate-500">Todas las cortadoras</p></div>
      </article>
    </section>
  `,
})
export class IndicadoresComponent {}
