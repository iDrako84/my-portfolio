import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header-logo',
  standalone: true,
  imports: [],
  templateUrl: './header-logo.component.html',
  styleUrl: './header-logo.component.scss'
})
export class HeaderLogoComponent {
  public name = signal('Ma.');
  public githubLink = signal('https://github.com/iDrako84');
}
