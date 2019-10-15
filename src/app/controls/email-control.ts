import { FormControl, Validators, AbstractControl } from '@angular/forms';
import { EMAIL_ERROR_MESSAGES } from '../custom-error-messages/email-error-messages';

export interface EmailTypeControl {
  type: string;
}

export class EmailControl extends FormControl {

  constructor() {
    super('');
    this.settingEmailValidators();
  }

  public settingEmailValidators() {
    this.setValidators([
      Validators.required,
      Validators.email,
    ]);
  }

  public get emailError(): string {
    if (this.errors) {
      const errorKeys = Object.keys(this.errors);
      const currentKey = errorKeys[0];
      return EMAIL_ERROR_MESSAGES[currentKey];
    }
    return '';
  }

  private get enableErrorMessages(): boolean {
    return this.invalid && ( this.touched || this.dirty );
  }

}
