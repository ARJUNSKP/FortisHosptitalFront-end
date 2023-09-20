import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpticketComponent } from './opticket.component';

describe('OpticketComponent', () => {
  let component: OpticketComponent;
  let fixture: ComponentFixture<OpticketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpticketComponent]
    });
    fixture = TestBed.createComponent(OpticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
