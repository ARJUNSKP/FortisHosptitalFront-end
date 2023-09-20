import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorNewComponent } from './doctor-new.component';

describe('DoctorNewComponent', () => {
  let component: DoctorNewComponent;
  let fixture: ComponentFixture<DoctorNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorNewComponent]
    });
    fixture = TestBed.createComponent(DoctorNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
