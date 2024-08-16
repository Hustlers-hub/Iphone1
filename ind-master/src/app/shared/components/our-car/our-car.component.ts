import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-our-car',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-car.component.html',
  styleUrls: ['./our-car.component.css']
})
export class OurCarComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('viewer') viewerRef!: ElementRef;
  images: string[] = [];
  private totalImages: number = 39;  // From 2.png to 40.png
  private currentIndex: number = 0;
  private startX!: number;
  private isDragging: boolean = false;

  ngOnInit(): void {
    // Preload images from 2.png to 40.png
    for (let i = 2; i <= 40; i++) {
      this.images.push(`assets/360/${i}.png`);
    }
  }

  ngAfterViewInit(): void {
    const viewer = this.viewerRef.nativeElement as HTMLDivElement;
    viewer.addEventListener('mousedown', this.onMouseDown.bind(this));
    viewer.addEventListener('mousemove', this.onMouseMove.bind(this));
    viewer.addEventListener('mouseup', this.onMouseUp.bind(this));
    viewer.addEventListener('mouseleave', this.onMouseLeave.bind(this));
  }

  ngOnDestroy(): void {
    const viewer = this.viewerRef.nativeElement as HTMLDivElement;
    viewer.removeEventListener('mousedown', this.onMouseDown.bind(this));
    viewer.removeEventListener('mousemove', this.onMouseMove.bind(this));
    viewer.removeEventListener('mouseup', this.onMouseUp.bind(this));
    viewer.removeEventListener('mouseleave', this.onMouseLeave.bind(this));
  }

  private onMouseDown(event: MouseEvent): void {
    this.isDragging = true;
    this.startX = event.pageX;
  }

  private onMouseMove(event: MouseEvent): void {
    if (this.isDragging) {
      const dx = event.pageX - this.startX;
      const direction = dx > 0 ? 1 : -1;
      if (Math.abs(dx) > 15) {
        this.startX = event.pageX;
        this.currentIndex = (this.currentIndex - direction + this.totalImages) % this.totalImages;
        this.updateImageDisplay();
      }
    }
  }

  private onMouseUp(): void {
    this.isDragging = false;
  }

  private onMouseLeave(): void {
    this.isDragging = false;
  }

  private updateImageDisplay(): void {
    const viewer = this.viewerRef.nativeElement as HTMLDivElement;
    const imgs = viewer.getElementsByTagName('img');
    for (let i = 0; i < this.totalImages; i++) {
      imgs[i].style.display = 'none';
    }
    imgs[this.currentIndex].style.display = 'block';
  }
}
