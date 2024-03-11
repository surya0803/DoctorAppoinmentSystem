import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientViewappoinmentstatusComponent } from './patient-viewappoinmentstatus.component';

describe('PatientViewappoinmentstatusComponent', () => {
  let component: PatientViewappoinmentstatusComponent;
  let fixture: ComponentFixture<PatientViewappoinmentstatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientViewappoinmentstatusComponent]
    });
    fixture = TestBed.createComponent(PatientViewappoinmentstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
