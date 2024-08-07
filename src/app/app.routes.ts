import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/calendar', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./calendar-page/calendar-page.component').then(x => x.CalendarPageComponent),
  },
];
