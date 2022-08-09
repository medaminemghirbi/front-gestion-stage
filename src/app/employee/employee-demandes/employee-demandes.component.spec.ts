import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDemandesComponent } from './employee-demandes.component';

describe('EmployeeDemandesComponent', () => {
  let component: EmployeeDemandesComponent;
  let fixture: ComponentFixture<EmployeeDemandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDemandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
