import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartNovelComponent } from './start-novel.component';

describe('StartNovelComponent', () => {
  let component: StartNovelComponent;
  let fixture: ComponentFixture<StartNovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartNovelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartNovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
