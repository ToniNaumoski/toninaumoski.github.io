import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {RegistrationComponent} from './components/registration/registration.component';
import {ActivationComponent} from "./components/activation/activation.component";
import {LoginComponent} from './components/login/login.component';
import {AccountComponent} from "./components/account/account.component";
import {AnnouncementComponent} from "./components/announcement/announcement.component";
import {CostComponent} from "./components/cost/cost.component";
import {IdentificationComponent} from "./components/identification/identification.component";
import {DescriptionComponent} from "./components/description/description.component";
import {PaymentComponent} from "./components/payment/payment.component";
import {PublishedComponent} from "./components/published/published.component";
import {AuthGuard} from "./guard/auth.guard";
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ForgotPasswordComponent} from "./components/forgot-password/forgot-password.component";
import {UpgradePasswordComponent} from "./components/upgrade-password/upgrade-password.component";
import { StepOneComponent } from './components/step-one/step-one/step-one.component';
import { StepTwoComponent } from './components/step-two/step-two/step-two.component';
import { StepThreeComponent } from './components/step-three/step-three/step-three.component';
import { StepFourComponent } from './components/step-four/step-four/step-four.component';
import { StepFiveComponent } from './components/step-five/step-five/step-five.component';

// @ts-ignore
export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegistrationComponent},
  {path:'dashboard', component: DashboardComponent},
// this is commented by toni naumoski for the moment {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
 // {path: 'register', component: RegistrationComponent, children: [{path: 'activate', component: ActivationComponent}]},

  {
    path: 'account', component: AccountComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'activate', component: ActivationComponent},
      {path: 'reset', component: ForgotPasswordComponent},
      {path: 'change-password', component: UpgradePasswordComponent}
    ]
  },
  {
    path: 'announcement', component: AnnouncementComponent,
    children: [
      {path: '', redirectTo: 'cost', pathMatch: 'full'},
      {path: 'cost', component: CostComponent,
      children:[
        {path: '',  component: StepOneComponent},
        {path: 'steptwo',  component: StepTwoComponent},
        {path: 'stepthree',  component: StepThreeComponent},
        {path: 'stepfour',  component: StepFourComponent},
        {path: 'stepfive',  component: StepFiveComponent}
      ]
    },
      {path: 'identification', component: IdentificationComponent},
      {path: 'description', component: DescriptionComponent},
      {path: 'payment', component: PaymentComponent},
      {path: 'published', component: PublishedComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
