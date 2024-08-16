import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-without-bg',
  standalone: true,
  imports: [],
  templateUrl: './card-without-bg.component.html',
  styleUrl: './card-without-bg.component.css'
})
export class CardWithoutBgComponent {
  @Input() title: string = ''; 
  @Input() desc: string = ''; 
  @Input() bgImg: string = '';
}
