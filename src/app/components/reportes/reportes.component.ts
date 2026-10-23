import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IndicadoresComponent } from './components/indicadores/indicadores.component';
import { ConosAnchoComponent } from './components/conos-ancho/conos-ancho.component';
import { ConosGrosorComponent } from './components/conos-grosor/conos-grosor.component';
import { ListaProduccionComponent, RegistroProduccion } from './components/list/lista-produccion.component';
import { ProduccionOperadorComponent } from './components/produccion-operador/produccion-operador.component';


@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [CommonModule, FormsModule, IndicadoresComponent, ListaProduccionComponent,ProduccionOperadorComponent, ConosGrosorComponent, ConosAnchoComponent],
  templateUrl: './reportes.component.html',
})
export class ReportesComponent {
  fechaInicial = '2025-05-20';
  fechaFinal = '2025-05-26';
  cortadora = 'Todas';
  operador = 'Todos';
  busquedaAplicada = false;

  registros: RegistroProduccion[] = [
    { fecha: '26/05/2025', cortadora: 1, operador: 'Javier Garcia', cantidad: 1200, ancho: 120, grosor: 6 },
    { fecha: '26/05/2025', cortadora: 2, operador: 'Diego Gomez', cantidad: 980, ancho: 80, grosor: 10 },
    { fecha: '26/05/2025', cortadora: 3, operador: 'Marcial Acosta', cantidad: 1150, ancho: 150, grosor: 6 },
    { fecha: '26/05/2025', cortadora: 4, operador: 'Pedro Jalabe', cantidad: 760, ancho: 100, grosor: 10 },
    { fecha: '26/05/2025', cortadora: 5, operador: 'Javier Garcia', cantidad: 1320, ancho: 60, grosor: 6 },
    { fecha: '26/05/2025', cortadora: 6, operador: 'Diego Gomez', cantidad: 870, ancho: 120, grosor: 10 },
    { fecha: '26/05/2025', cortadora: 7, operador: 'Marcial Acosta', cantidad: 1050, ancho: 150, grosor: 6 },
    { fecha: '26/05/2025', cortadora: 8, operador: 'Pedro Jalabe', cantidad: 690, ancho: 75, grosor: 10 },
    { fecha: '26/05/2025', cortadora: 9, operador: 'Javier Garcia', cantidad: 1410, ancho: 100, grosor: 6 },
    { fecha: '26/05/2025', cortadora: 10, operador: 'Diego Gomez', cantidad: 1220, ancho: 80, grosor: 10 },
    { fecha: '25/05/2025', cortadora: 1, operador: 'Pedro Jalabe', cantidad: 910, ancho: 90, grosor: 6 },
    { fecha: '24/05/2025', cortadora: 2, operador: 'Marcial Acosta', cantidad: 1080, ancho: 75, grosor: 10 },
    { fecha: '23/05/2025', cortadora: 3, operador: 'Javier Garcia', cantidad: 990, ancho: 60, grosor: 6 },
    { fecha: '22/05/2025', cortadora: 4, operador: 'Diego Gomez', cantidad: 860, ancho: 90, grosor: 10 },
  ];

  get registrosFiltrados(): RegistroProduccion[] {
    return this.registros.filter(r =>
      (this.cortadora === 'Todas' || r.cortadora === Number(this.cortadora)) &&
      (this.operador === 'Todos' || r.operador === this.operador)
    );
  }

  buscar(): void {
    this.busquedaAplicada = true;
  }
}
