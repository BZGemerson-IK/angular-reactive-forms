import { Injectable } from '@angular/core';
import { EmailControl } from '../controls/email-control';
import { FormGroup, FormBuilder } from '@angular/forms';

@Injectable()
export class CheckoutAnonymousUserFormService {

  private _emailControl = new EmailControl();

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      email: this._emailControl,
    });
    this._emailControl.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  public get emailControl() {
    return this.form.get('email') as EmailControl;
  }
}
