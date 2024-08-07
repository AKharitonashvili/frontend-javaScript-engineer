import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/calendar', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./calendar/calendar.component').then(x => x.CalendarComponent),
  },
];
