import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditdoctorComponent } from './admin-editdoctor.component';

describe('AdminEditdoctorComponent', () => {
  let component: AdminEditdoctorComponent;
  let fixture: ComponentFixture<AdminEditdoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEditdoctorComponent]
    });
    fixture = TestBed.createComponent(AdminEditdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
