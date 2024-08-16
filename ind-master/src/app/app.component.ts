import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardWithBgComponent } from "../app/shared/components/card-with-bg/card-with-bg.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ind';
}
