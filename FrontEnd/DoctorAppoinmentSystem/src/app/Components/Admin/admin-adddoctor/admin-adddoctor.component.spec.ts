import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdddoctorComponent } from './admin-adddoctor.component';

describe('AdminAdddoctorComponent', () => {
  let component: AdminAdddoctorComponent;
  let fixture: ComponentFixture<AdminAdddoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAdddoctorComponent]
    });
    fixture = TestBed.createComponent(AdminAdddoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
