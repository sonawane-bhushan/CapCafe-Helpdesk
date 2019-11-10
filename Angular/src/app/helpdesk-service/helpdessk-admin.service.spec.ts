import { TestBed } from '@angular/core/testing';

import { HelpdesskAdminService } from './helpdessk-admin.service';

describe('HelpdesskAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HelpdesskAdminService = TestBed.get(HelpdesskAdminService);
    expect(service).toBeTruthy();
  });
});
