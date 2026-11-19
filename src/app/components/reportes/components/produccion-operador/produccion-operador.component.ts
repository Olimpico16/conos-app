import { PanelComponent } from '../../../../shared/components/panel/panel.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produccion-operador',
  standalone: true,
  imports: [CommonModule, PanelComponent],
  templateUrl: './produccion-operador.component.html',
})
export class ProduccionOperadorComponent {
  operadores = [
    { nombre: 'Javier Garcia', valor: 3510, color: '#ef1724' },
    { nombre: 'Diego Gomez', valor: 3040, color: '#168bd0' },
    { nombre: 'Marcial Acosta', valor: 2870, color: '#252a2e' },
    { nombre: 'Pedro Jalabe', valor: 2330, color: '#2d9cdb' },
  ];
}
