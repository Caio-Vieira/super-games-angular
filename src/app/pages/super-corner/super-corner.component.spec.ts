import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperCornerComponent } from './super-corner.component';

describe('SuperCornerComponent', () => {
  let component: SuperCornerComponent;
  let fixture: ComponentFixture<SuperCornerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperCornerComponent]
    });
    fixture = TestBed.createComponent(SuperCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
