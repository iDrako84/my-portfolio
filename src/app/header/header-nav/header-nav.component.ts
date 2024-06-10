import { Component, Input, WritableSignal, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.scss'
})
export class HeaderNavComponent {
  @Input() navItems: WritableSignal<any[]> = signal([]);
}
