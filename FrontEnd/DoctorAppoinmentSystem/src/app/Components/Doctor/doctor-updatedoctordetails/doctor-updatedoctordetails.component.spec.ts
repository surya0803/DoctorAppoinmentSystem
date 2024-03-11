import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorUpdatedoctordetailsComponent } from './doctor-updatedoctordetails.component';

describe('DoctorUpdatedoctordetailsComponent', () => {
  let component: DoctorUpdatedoctordetailsComponent;
  let fixture: ComponentFixture<DoctorUpdatedoctordetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorUpdatedoctordetailsComponent]
    });
    fixture = TestBed.createComponent(DoctorUpdatedoctordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
