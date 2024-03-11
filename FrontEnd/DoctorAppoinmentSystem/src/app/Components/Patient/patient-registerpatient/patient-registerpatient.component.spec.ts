import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRegisterpatientComponent } from './patient-registerpatient.component';

describe('PatientRegisterpatientComponent', () => {
  let component: PatientRegisterpatientComponent;
  let fixture: ComponentFixture<PatientRegisterpatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientRegisterpatientComponent]
    });
    fixture = TestBed.createComponent(PatientRegisterpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
