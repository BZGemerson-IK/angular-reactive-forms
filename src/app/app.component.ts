import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CheckoutAnonymousUserFormService } from './forms/checkout-anonymous-user-form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    public checkoutUserForm: CheckoutAnonymousUserFormService,
  ) {
  }

  ngOnInit(): void {
  }
}
