import { TestBed } from '@angular/core/testing';

import { CheckoutAnonymousUserFormService } from './checkout-anonymous-user-form.service';

describe('CheckoutAnonymousUserFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckoutAnonymousUserFormService = TestBed.get(CheckoutAnonymousUserFormService);
    expect(service).toBeTruthy();
  });
});
