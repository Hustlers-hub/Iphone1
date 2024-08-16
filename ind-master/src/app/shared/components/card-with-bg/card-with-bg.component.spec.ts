import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWithBgComponent } from './card-with-bg.component';

describe('CardWithBgComponent', () => {
  let component: CardWithBgComponent;
  let fixture: ComponentFixture<CardWithBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardWithBgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardWithBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
