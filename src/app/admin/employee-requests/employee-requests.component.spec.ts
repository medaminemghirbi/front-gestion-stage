import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRequestsComponent } from './employee-requests.component';

describe('EmployeeRequestsComponent', () => {
  let component: EmployeeRequestsComponent;
  let fixture: ComponentFixture<EmployeeRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
