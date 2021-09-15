import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicDetailsComponent } from './basic-details/basic-details.component';
import { PaymentComponent } from './payment/payment.component';
import { SuccessScreenComponent } from './success-screen/success-screen.component';
import { TokenDetailsComponent } from './token-details/token-details.component';

const routes: Routes = [
  {path:'', component:BasicDetailsComponent},
  {path:'token-details', component:TokenDetailsComponent},
  {path:'payment', component:PaymentComponent},
  {path:'submit', component:SuccessScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
