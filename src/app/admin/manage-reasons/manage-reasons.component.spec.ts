import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageReasonsComponent } from './manage-reasons.component';

describe('ManageReasonsComponent', () => {
  let component: ManageReasonsComponent;
  let fixture: ComponentFixture<ManageReasonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageReasonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageReasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
