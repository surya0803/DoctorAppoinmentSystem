import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditHospitalDetailsComponent } from './admin-edit-hospital-details.component';

describe('AdminEditHospitalDetailsComponent', () => {
  let component: AdminEditHospitalDetailsComponent;
  let fixture: ComponentFixture<AdminEditHospitalDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEditHospitalDetailsComponent]
    });
    fixture = TestBed.createComponent(AdminEditHospitalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
