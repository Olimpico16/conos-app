import { Component } from '@angular/core';

@Component({
  selector: 'app-conos-grosor',
  standalone: true,
  template: `
    <section class="rounded-lg border border-blue-100 bg-white p-4 shadow-sm">
      <h3 class="mb-2 font-bold">Conos por grosor</h3>
      <div class="flex flex-wrap items-center justify-center gap-5">
        <div class="relative h-32 w-32 shrink-0 rounded-full" style="background: conic-gradient(#ef1724 0 62.7%, #168bd0 62.7% 100%)">
          <div class="absolute inset-5 flex flex-col items-center justify-center rounded-full bg-white text-center">
            <span class="text-xs">Total</span><strong class="text-lg">12,480</strong>
          </div>
        </div>
        <div class="space-y-3 text-sm">
          <div class="flex items-start gap-2"><span class="mt-1 h-3 w-3 rounded-full bg-red-600"></span><div><p class="font-semibold">6 mm</p><p class="text-slate-500">7,820 (62.7%)</p></div></div>
          <div class="flex items-start gap-2"><span class="mt-1 h-3 w-3 rounded-full bg-sky-600"></span><div><p class="font-semibold">10 mm</p><p class="text-slate-500">4,660 (37.3%)</p></div></div>
        </div>
      </div>
    </section>
  `,
})
export class ConosGrosorComponent {}
