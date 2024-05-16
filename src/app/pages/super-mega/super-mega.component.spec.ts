import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperMegaComponent } from './super-mega.component';

describe('SuperMegaComponent', () => {
  let component: SuperMegaComponent;
  let fixture: ComponentFixture<SuperMegaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperMegaComponent]
    });
    fixture = TestBed.createComponent(SuperMegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
