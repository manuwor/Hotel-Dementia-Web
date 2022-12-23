import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurGuestComponent } from './our-guest.component';

describe('OurGuestComponent', () => {
  let component: OurGuestComponent;
  let fixture: ComponentFixture<OurGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurGuestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
