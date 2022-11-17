import {Component, OnInit} from '@angular/core';
import {LoginRequest} from "../../models/LoginRequest";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertService} from "../../services/interaction/alertservices/alert.service";
import {AuthenticateService} from "../../services/remote/authenticate/authenticate.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  emailAdress: FormControl;
  passwordTxt: FormControl;
  loading = false;
  showErrorMessage = false;
  submitted = false;
  returnUrl: string;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticateService,
    private alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  LoginOnSubmit() {
    this.submitted = true;
    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    let loginData = new LoginRequest(
      this.f.username.value,
      this.f.password.value
    );
    console.log('LoginRequest validated and collected! READY TO SEND');
    console.log(loginData);
    this.loading = true;
    this.authenticationService.login(loginData).subscribe(
      data => {
        console.log("logged in");
        this.router.navigate([this.returnUrl]); // this.returnUrl could the replace of /
        this.loading = false;
      },
      error => {
        console.log("Error handler");
        this.errorMessage = error.error.message;
        this.showErrorMessage = true;
        this.loading = false;
      });
  }
}
