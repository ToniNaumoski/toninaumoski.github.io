import {Component, OnInit} from '@angular/core';
import {ActivationService} from "../../services/remote/activation/activation.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivationType} from "../../models/ActivationType";
import {ActivationRequest} from "../../models/ActivationRequest";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.css']
})
export class ActivationComponent implements OnInit {

  activationForm: FormGroup
  otp: string;
  activating: boolean = false;

  constructor(private activationService: ActivationService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.queryParams['email'])

    this.activationForm = new FormGroup({
      'otp': new FormControl(this.otp, [
        Validators.required,
        Validators.minLength(6)
      ])
    }, [Validators.required]);
  }

  activateAccount() {
    console.log("User has sent activation request to the server.")
    this.activating = true;

    let activation = new ActivationRequest(
      this.activationForm.value.otp,
      ActivationType.EMAIL_OTP,
      this.activatedRoute.snapshot.queryParams['email']);

    console.log("data sent: ")
    console.log(activation)

    return this.activationService.activateAccount(activation).subscribe(value => {
      this.activating = false;
      console.log("activation successful.");
      this.router.navigate(['/account', 'login']);
    }, error => {
      this.activating = false;
      console.log("activation failure.")
      console.log(error);
    });
  }
}
