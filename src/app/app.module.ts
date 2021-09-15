import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicDetailsComponent } from './basic-details/basic-details.component';
import { TokenDetailsComponent } from './token-details/token-details.component';
import { PaymentComponent } from './payment/payment.component';
import { SuccessScreenComponent } from './success-screen/success-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicDetailsComponent,
    TokenDetailsComponent,
    PaymentComponent,
    SuccessScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
