import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperCourtComponent } from './super-court.component';

describe('SuperCourtComponent', () => {
  let component: SuperCourtComponent;
  let fixture: ComponentFixture<SuperCourtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperCourtComponent]
    });
    fixture = TestBed.createComponent(SuperCourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
