import { Routes } from '@angular/router';
import { OrdenesComponent } from './components/ordenes/ordenes.component';
import { ReportesComponent } from './components/reportes/reportes.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'ordenes' },
  { path: 'ordenes', component: OrdenesComponent, title: 'Órdenes de corte' },
  { path: 'mi-reporte', component: ReportesComponent, title: 'Mi reporte' },
  { path: '**', redirectTo: 'ordenes' },
];
