import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenerysDetailComponent } from './scenerys-detail.component';

describe('ScenerysDetailComponent', () => {
  let component: ScenerysDetailComponent;
  let fixture: ComponentFixture<ScenerysDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScenerysDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenerysDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
