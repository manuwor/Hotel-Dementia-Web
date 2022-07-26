import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseEpComponent } from './choose-ep.component';

describe('ChooseEpComponent', () => {
  let component: ChooseEpComponent;
  let fixture: ComponentFixture<ChooseEpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseEpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseEpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
