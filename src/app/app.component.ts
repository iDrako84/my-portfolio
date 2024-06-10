import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(
    private _renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this._renderer.addClass(document.body, 'font-roboto');
    /* this._renderer.addClass(document.body, 'w-screen');
    this._renderer.addClass(document.body, 'h-screen'); */
    this._renderer.addClass(document.body, 'bg-gradient-to-b');
    this._renderer.addClass(document.body, 'from-indigo-800');
    this._renderer.addClass(document.body, 'to-violet-800');
  }
}
