import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-calendar-page',
  standalone: true,
  imports: [],
  templateUrl: './calendar-page.component.html',
  styleUrl: './calendar-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarPageComponent {

}
