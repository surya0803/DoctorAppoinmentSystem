import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorUpcomingappoinmentComponent } from './doctor-upcomingappoinment.component';

describe('DoctorUpcomingappoinmentComponent', () => {
  let component: DoctorUpcomingappoinmentComponent;
  let fixture: ComponentFixture<DoctorUpcomingappoinmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorUpcomingappoinmentComponent]
    });
    fixture = TestBed.createComponent(DoctorUpcomingappoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
