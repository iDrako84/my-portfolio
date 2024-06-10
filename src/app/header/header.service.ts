import { Injectable, WritableSignal, signal } from '@angular/core';
import { NavsModel } from './navs.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private header = signal([
    { path: '', title: 'Home', icon: 'icons/home.svg' },
    { path: 'about', title: 'About', icon: 'icons/user.svg' },
    { path: 'project', title: 'Project', icon: 'icons/computer-desktop.svg' },
    { path: 'resume', title: 'Resume', icon: 'icons/document-text.svg' },
  ]);

  public getHeader(): WritableSignal<NavsModel[]> {
    return this.header;
  }
}
