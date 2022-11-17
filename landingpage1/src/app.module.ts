import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RegistrationComponent} from './components/registration/registration.component';
import {RegistrationService} from "./services/remote/registration/registration.service";
import {LoginComponent} from './components/login/login.component';
import {ActivationComponent} from './components/activation/activation.component';
import {HomeComponent} from './components/home/home.component';
import {AccountComponent} from './components/account/account.component';
import {AnnouncementComponent} from './components/announcement/announcement.component';
import {CostComponent} from './components/cost/cost.component';
import {IdentificationComponent} from './components/identification/identification.component';
import {DescriptionComponent} from './components/description/description.component';
import {PaymentComponent} from './components/payment/payment.component';
import {PublishedComponent} from './components/published/published.component';
import {AnnouncementService} from "./services/interaction/announcement/announcement.service";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { UpgradePasswordComponent } from './components/upgrade-password/upgrade-password.component';
import { ButtonModule } from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import { HeaderComponent } from './components/header/header/header.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { CardComponent } from './components/card/card/card.component';
import {CardModule} from 'primeng/card';
import { PrieseComponent } from './components/priese-section/priese/priese.component';
import { AktuellComponent } from './components/aktuell-section/aktuell/aktuell.component';
import { SubscribeComponent } from './components/subscribe-section/subscribe/subscribe.component';
import { KontaktComponent } from './components/kontact-section/kontakt/kontakt.component';
import { FaqComponent } from './components/faq-section/faq/faq.component';
import {AccordionModule} from 'primeng/accordion';
import { CarouselComponent } from './components/carousel-section/carousel/carousel.component';
import {CarouselModule} from 'primeng/carousel';
import { CustomersComponent } from './components/customers-section/customers/customers.component';
import {RatingModule} from 'primeng/rating';
import {FormsModule} from '@angular/forms';
import {SplitButtonModule} from 'primeng/splitbutton';
import { SearchSectionComponent } from './components/search-section/search-section/search-section.component';
import { PaginatorSectionComponent } from './components/paginator-section/paginator-section/paginator-section.component';
import {PaginatorModule} from 'primeng/paginator';
import { DashboardDataComponent } from './components/dashboard-data-section/dashboard-data/dashboard-data.component';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {StepsModule} from 'primeng/steps';
import { StepOneComponent } from './components/step-one/step-one/step-one.component';
import { StepTwoComponent } from './components/step-two/step-two/step-two.component';
import { StepThreeComponent } from './components/step-three/step-three/step-three.component';
import { StepFourComponent } from './components/step-four/step-four/step-four.component';
import { StepFiveComponent } from './components/step-five/step-five/step-five.component';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CalendarModule} from 'primeng/calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputMaskModule} from 'primeng/inputmask';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    ActivationComponent,
    AccountComponent,
    AnnouncementComponent,
    CostComponent,
    IdentificationComponent,
    DescriptionComponent,
    PaymentComponent,
    PublishedComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    UpgradePasswordComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    PrieseComponent,
    AktuellComponent,
    SubscribeComponent,
    KontaktComponent,
    FaqComponent,
    CarouselComponent,
    CustomersComponent,
    SearchSectionComponent,
    PaginatorSectionComponent,
    DashboardDataComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent,
    StepFiveComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ButtonModule,
    RippleModule,
    CardModule,
    AccordionModule,
    CarouselModule,
    RatingModule,
    FormsModule,
    SplitButtonModule,
    PaginatorModule,
    ScrollPanelModule,
    StepsModule,
    InputNumberModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
    RadioButtonModule,
    CalendarModule,
    InputTextareaModule,
    InputMaskModule
  ],
  providers: [RegistrationService, AnnouncementService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
