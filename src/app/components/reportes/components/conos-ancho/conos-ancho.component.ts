import { PanelComponent } from '../../../../shared/components/panel/panel.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conos-ancho',
  standalone: true,
  imports: [CommonModule, PanelComponent],
  templateUrl: './conos-ancho.component.html',
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
