// src/app/shared/components/card-with-bg/card-with-bg.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-with-bg',
  standalone: true,
  templateUrl: './card-with-bg.component.html',
  styleUrls: ['./card-with-bg.component.css'] 
})
export class CardWithBgComponent {
  @Input() title: string = ''; 
  @Input() desc: string = ''; 
  @Input() bgImg: string = '';
}
