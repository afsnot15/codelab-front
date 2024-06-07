import { TestBed } from '@angular/core/testing';
import { BaseResource } from './base-resource.service';


describe('BaseServiceService', () => {
  let service: BaseResource<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseResource);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
