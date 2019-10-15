import { EmailControl } from './email-control';
import { EMAIL_ERROR_MESSAGES } from '../custom-error-messages/email-error-messages';

describe('NameControl', () => {
  it('should create an instance', () => {
    expect(new EmailControl()).toBeTruthy();
  });

  it('should show "required error message"', () => {
    const email = new EmailControl();
    email.markAsPristine();
    expect(email.invalid).toBe(true);
  });
});
