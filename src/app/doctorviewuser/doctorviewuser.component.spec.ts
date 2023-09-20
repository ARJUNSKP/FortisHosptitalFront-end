import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorviewuserComponent } from './doctorviewuser.component';

describe('DoctorviewuserComponent', () => {
  let component: DoctorviewuserComponent;
  let fixture: ComponentFixture<DoctorviewuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorviewuserComponent]
    });
    fixture = TestBed.createComponent(DoctorviewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
