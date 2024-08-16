import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWithoutBgComponent } from './card-without-bg.component';

describe('CardWithoutBgComponent', () => {
  let component: CardWithoutBgComponent;
  let fixture: ComponentFixture<CardWithoutBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardWithoutBgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardWithoutBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
