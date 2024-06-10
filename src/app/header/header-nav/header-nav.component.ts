import { Component, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderService } from '../header.service';
import { NavsModel } from '../navs.model';

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
  public navItems: WritableSignal<NavsModel[]> = this._headerService.getHeader();

  constructor(
    private _headerService: HeaderService
  ) {}
}
