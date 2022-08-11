import { TestBed } from '@angular/core/testing';

import { EmployeePanelService } from './employee-panel.service';

describe('EmployeePanelService', () => {
  let service: EmployeePanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeePanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
