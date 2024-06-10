import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { HeaderNavMobileComponent } from './header-nav-mobile/header-nav-mobile.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    HeaderLogoComponent,
    HeaderNavComponent,
    HeaderNavMobileComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public navItems = signal([
    { path: '', title: 'Home', icon: 'icons/home.svg' },
    { path: 'about', title: 'About', icon: 'icons/user.svg' },
    { path: 'project', title: 'Project', icon: 'icons/computer-desktop.svg' },
    { path: 'resume', title: 'Resume', icon: 'icons/document-text.svg' },
  ]);
}
