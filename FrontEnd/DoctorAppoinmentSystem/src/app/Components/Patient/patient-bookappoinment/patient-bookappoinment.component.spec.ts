import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientBookappoinmentComponent } from './patient-bookappoinment.component';

describe('PatientBookappoinmentComponent', () => {
  let component: PatientBookappoinmentComponent;
  let fixture: ComponentFixture<PatientBookappoinmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientBookappoinmentComponent]
    });
    fixture = TestBed.createComponent(PatientBookappoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
