import { NgClass } from '@angular/common';
import { Component, Input, WritableSignal, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EnterMenu } from '../../shared/animations/animations';

@Component({
  selector: 'app-header-nav-mobile',
  standalone: true,
  imports: [
    RouterLink,
    NgClass
  ],
  templateUrl: './header-nav-mobile.component.html',
  styleUrl: './header-nav-mobile.component.scss',
  animations: [
    EnterMenu
  ]
})
export class HeaderNavMobileComponent {
  @Input() navItems: WritableSignal<any[]> = signal([]);
  public menuOpen = signal(false);

  public openCloseMenu(): void {
    this.menuOpen.set(!this.menuOpen());
  }

  public onSelectedFeature(): void {
    this.menuOpen.set(false);
  }
}
