import { TestBed } from '@angular/core/testing';

import { ActionService } from './action.service';

describe('ActionServiceService', () => {
  let service: ActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
