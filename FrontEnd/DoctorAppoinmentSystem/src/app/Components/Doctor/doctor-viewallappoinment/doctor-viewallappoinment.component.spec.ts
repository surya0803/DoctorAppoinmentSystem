import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorViewallappoinmentComponent } from './doctor-viewallappoinment.component';

describe('DoctorViewallappoinmentComponent', () => {
  let component: DoctorViewallappoinmentComponent;
  let fixture: ComponentFixture<DoctorViewallappoinmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorViewallappoinmentComponent]
    });
    fixture = TestBed.createComponent(DoctorViewallappoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
