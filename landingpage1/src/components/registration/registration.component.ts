import {Component, OnInit} from '@angular/core';
import {RegistrationRequest} from "../../models/RegistrationRequest";
import {RegistrationService} from "../../services/remote/registration/registration.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivationType} from "../../models/ActivationType";
import {Router} from "@angular/router";
import {AuthenticateService} from "../../services/remote/authenticate/authenticate.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  fullName: FormControl;
  emailAddress: FormControl;
  mobileNumber: FormControl;
  password: FormControl;
  consentApproved: FormControl;
  submitting: boolean = false;

  constructor(private registrationService: RegistrationService, private router: Router, private  authenticateService: AuthenticateService) {
    // redirect to home if already logged in
    if (authenticateService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      'fullName': new FormControl(this.fullName, [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(2)
      ]),
      'emailAddress': new FormControl(this.emailAddress, [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)
      ]),
      'mobileNumber': new FormControl(this.mobileNumber, [
        Validators.required,
        Validators.maxLength(25),
        Validators.pattern(/\d/)
      ]),
      'password': new FormControl(this.password, [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(6),
        Validators.pattern(/\d/),
        Validators.pattern(/[a-z]/),
        Validators.pattern(/[A-Z]/)
      ]),
      'consentApproved': new FormControl(this.consentApproved, [
        Validators.requiredTrue
      ])
    }, [Validators.required]);
  }

  submitRegistration() {
    console.log("User has sent registration data to the server.")
    this.submitting = true;
    let registration = new RegistrationRequest(
      this.registrationForm.value.consentApproved,
      this.registrationForm.value.fullName,
      this.registrationForm.value.emailAddress,
      ActivationType.EMAIL_OTP,
      this.registrationForm.value.mobileNumber,
      this.registrationForm.value.password);

    console.log("data sent: ");
    console.log(registration);

    return this.registrationService.sendRegistration(registration).subscribe(value => {
        this.submitting = false;
        console.log("data successfully received. ");
        this.router.navigate(['/account', 'activate'], {queryParams: {email: value.email_address}});
      },
      error => {
        this.submitting = false;
        console.log("request failure: ");
        console.log(error);
        //this.router.navigate(['/']);
      })
  }
}
