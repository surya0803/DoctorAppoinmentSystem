import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditHospitalComponent } from './admin-edit-hospital.component';

describe('AdminEditHospitalComponent', () => {
  let component: AdminEditHospitalComponent;
  let fixture: ComponentFixture<AdminEditHospitalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEditHospitalComponent]
    });
    fixture = TestBed.createComponent(AdminEditHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
