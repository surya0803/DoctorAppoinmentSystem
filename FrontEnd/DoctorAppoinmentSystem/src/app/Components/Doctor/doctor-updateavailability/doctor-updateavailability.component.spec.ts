import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorUpdateavailabilityComponent } from './doctor-updateavailability.component';

describe('DoctorUpdateavailabilityComponent', () => {
  let component: DoctorUpdateavailabilityComponent;
  let fixture: ComponentFixture<DoctorUpdateavailabilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorUpdateavailabilityComponent]
    });
    fixture = TestBed.createComponent(DoctorUpdateavailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
