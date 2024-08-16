import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCarComponent } from './our-car.component';

describe('OurCarComponent', () => {
  let component: OurCarComponent;
  let fixture: ComponentFixture<OurCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurCarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
