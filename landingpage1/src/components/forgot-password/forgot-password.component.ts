import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PasswordService} from "../../services/remote/password/password.service";
import {AlertService} from "../../services/interaction/alertservices/alert.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  resetPasswordForm : FormGroup;
  email: string;
  isEmailSend: boolean = false;
  showErrorMessage: boolean = false;
  errorMessage: string;


  constructor(
    private  passwordService: PasswordService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.resetPasswordForm = new FormGroup({
      'email': new FormControl(this.email, [Validators.email,Validators.required]),
    }, Validators.required);
  }

  sendEmail(){
    this.errorMessage = "";
    this.showErrorMessage = false;
    this.alertService.clear();
    let emailValue = this.resetPasswordForm.value.email;
    this.passwordService.resetPassword(emailValue).subscribe( value =>{
      this.isEmailSend = true;
      console.log("email successfully sent.");
    },
      error => {
        this.errorMessage = error.error.message;
        this.showErrorMessage = true;
      });
  }


}
