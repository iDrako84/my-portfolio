import { NgClass } from '@angular/common';
import { Component, WritableSignal, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EnterMenu } from '../../shared/animations/animations';
import { NavsModel } from '../navs.model';
import { HeaderService } from '../header.service';

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
  public navItems: WritableSignal<NavsModel[]> = this._headerService.getHeader();
  public menuOpen = signal(false);

  constructor(
    private _headerService: HeaderService
  ) {}

  public openCloseMenu(): void {
    this.menuOpen.set(!this.menuOpen());
  }

  public onSelectedFeature(): void {
    this.menuOpen.set(false);
  }
}
