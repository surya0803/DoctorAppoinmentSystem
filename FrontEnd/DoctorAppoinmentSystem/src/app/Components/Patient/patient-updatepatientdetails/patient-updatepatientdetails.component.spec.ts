import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientUpdatepatientdetailsComponent } from './patient-updatepatientdetails.component';

describe('PatientUpdatepatientdetailsComponent', () => {
  let component: PatientUpdatepatientdetailsComponent;
  let fixture: ComponentFixture<PatientUpdatepatientdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientUpdatepatientdetailsComponent]
    });
    fixture = TestBed.createComponent(PatientUpdatepatientdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
