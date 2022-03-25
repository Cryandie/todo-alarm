import { TestBed } from '@angular/core/testing';

import { LiveTasksService } from './live-tasks.service';

describe('LiveTasksService', () => {
  let service: LiveTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiveTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
