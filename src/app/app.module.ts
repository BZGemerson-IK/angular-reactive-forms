import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutAnonymousUserFormService } from './forms/checkout-anonymous-user-form.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CheckoutAnonymousUserFormService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
