import { Component } from '@angular/core';
import { DeveloperComponent } from './developer/developer.component';
import { ContentTitleComponent } from './content-title/content-title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DeveloperComponent,
    ContentTitleComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
