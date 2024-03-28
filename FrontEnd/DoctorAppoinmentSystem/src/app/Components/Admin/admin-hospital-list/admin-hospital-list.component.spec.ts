import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHospitalLIstComponent } from './admin-hospital-list.component';

describe('AdminHospitalLIstComponent', () => {
  let component: AdminHospitalLIstComponent;
  let fixture: ComponentFixture<AdminHospitalLIstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminHospitalLIstComponent]
    });
    fixture = TestBed.createComponent(AdminHospitalLIstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
