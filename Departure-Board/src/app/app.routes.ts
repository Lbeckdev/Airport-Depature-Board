import { Routes } from '@angular/router';
import { DepartureBoardComponent } from './departure-board/departure-board.component';

export const routes: Routes = [
  { path: '', redirectTo: '/departure-board', pathMatch: 'full' },
  { path: 'departure-board', component: DepartureBoardComponent }
];
