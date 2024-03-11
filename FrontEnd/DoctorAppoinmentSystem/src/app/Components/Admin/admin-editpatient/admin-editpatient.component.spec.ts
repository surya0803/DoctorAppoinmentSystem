import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditpatientComponent } from './admin-editpatient.component';

describe('AdminEditpatientComponent', () => {
  let component: AdminEditpatientComponent;
  let fixture: ComponentFixture<AdminEditpatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEditpatientComponent]
    });
    fixture = TestBed.createComponent(AdminEditpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
