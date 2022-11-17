import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticateService} from "../../services/remote/authenticate/authenticate.service";
import {PasswordService} from "../../services/remote/password/password.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PasswordResetRequest} from "../../models/PasswordResetRequest";

@Component({
  selector: 'app-upgrade-password',
  templateUrl: './upgrade-password.component.html',
  styleUrls: ['./upgrade-password.component.css']
})
export class UpgradePasswordComponent implements OnInit {
  resetPasswordForm : FormGroup;
  token: string;
  isTokenValid: boolean = false;
  loading: boolean = false;
  submitted: boolean = false;
  showErrorMessage: boolean = false;
  errorMessage: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private  passwordService: PasswordService,
  ) { }

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParamMap.get('token');
    if (this.token === null || this.token === ""){
      this.router.navigate(['/account/login']);
      return;
    }
    this.validateTheTokenAndShowForm();
    this.resetPasswordForm = this.formBuilder.group({
      password: ['',  Validators.required],
      password2: ['', Validators.required]
    });
  }
  sendPassword(){
    this.submitted = true;
    if(this.resetPasswordForm.invalid){
      return;
    }
    console.log("in sendPass");
    let pass1 = this.f.password.value;
    let pass2 = this.f.password2.value;
    if (!(pass1 === pass2)){
      return;
    }
    console.log(pass1);
    this.loading = true;
    let request = new PasswordResetRequest(
      this.token,
      pass1,
      pass2
    );
    this.passwordService.upgradePassword(request).subscribe(
      data =>{
        console.log("password changed!");
        this.loading = false;
        alert("Password successfully changed!");
        setTimeout(() =>{
          this.router.navigate(['/account/login']);
        }, 2000);
      }, error => {

      }
    )
  }

  validateTheTokenAndShowForm(){
    //http://localhost:4200/account/change-password?token=a5ff7b61-f6d6-4b5d-8159-5b5c2fa9c82d
    let res = this.passwordService.validateToken(this.token).subscribe(
      data=>{
        this.isTokenValid = true;
        console.log("return oeuroeur");
      }, error => {
        this.router.navigate(['/account/login']);
      }
    );
  }
// convenience getter for easy access to form fields
  get f() {
    return this.resetPasswordForm.controls;
  }




  isUUID(token: string){
    //TODO: Test if it matches
    const regex = "/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i";
    let patt = new RegExp(regex); // not done yet.
    return patt.test(token);
  }

}
