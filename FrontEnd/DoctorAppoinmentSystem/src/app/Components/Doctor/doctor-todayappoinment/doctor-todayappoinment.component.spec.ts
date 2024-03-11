import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorTodayappoinmentComponent } from './doctor-todayappoinment.component';

describe('DoctorTodayappoinmentComponent', () => {
  let component: DoctorTodayappoinmentComponent;
  let fixture: ComponentFixture<DoctorTodayappoinmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorTodayappoinmentComponent]
    });
    fixture = TestBed.createComponent(DoctorTodayappoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
