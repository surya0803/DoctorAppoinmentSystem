import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorUpdateappoinmentstatusComponent } from './doctor-updateappoinmentstatus.component';

describe('DoctorUpdateappoinmentstatusComponent', () => {
  let component: DoctorUpdateappoinmentstatusComponent;
  let fixture: ComponentFixture<DoctorUpdateappoinmentstatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorUpdateappoinmentstatusComponent]
    });
    fixture = TestBed.createComponent(DoctorUpdateappoinmentstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
