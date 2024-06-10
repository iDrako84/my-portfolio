import { Component, WritableSignal } from '@angular/core';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { HeaderNavMobileComponent } from './header-nav-mobile/header-nav-mobile.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HeaderService } from './header.service';
import { NavsModel } from './navs.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    HeaderLogoComponent,
    HeaderNavComponent,
    HeaderNavMobileComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public navItems: WritableSignal<NavsModel[]> = this._headerService.getHeader();

  constructor(
    private _headerService: HeaderService
  ) {}
}
