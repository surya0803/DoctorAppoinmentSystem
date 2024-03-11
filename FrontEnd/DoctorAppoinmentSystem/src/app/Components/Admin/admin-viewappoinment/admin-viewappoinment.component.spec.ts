import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewappoinmentComponent } from './admin-viewappoinment.component';

describe('AdminViewappoinmentComponent', () => {
  let component: AdminViewappoinmentComponent;
  let fixture: ComponentFixture<AdminViewappoinmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminViewappoinmentComponent]
    });
    fixture = TestBed.createComponent(AdminViewappoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
