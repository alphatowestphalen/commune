import { HttpErrorResponse } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { ToastService } from 'angular-toastify';
import { AuthService } from 'src/app/core/services/auth.service';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],

})

export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  errors: boolean = false;
  type: boolean;

  constructor(
    public router: Router,
    private formbuilder: FormBuilder,
    private authservice: AuthService,
    private token: TokenService,
    private _toastService: ToastService,
    public translocoService: TranslocoService,
  ) { }

  switchLanguage(lang: string) {
    this.translocoService.setActiveLang(lang);
  }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  Login($event: any) {
    $event.preventDefault();
    this.authservice.login(this.loginForm.value).subscribe(
      (result) => {
        this.responseHandler(result.token);
      },
      (error) => {
        if (error.status === 401)
          this.errors = true;
        else{
          this._toastService.error('Erreur de connexion');
        }
      },
      () => {
        this.loginForm.reset();
        window.location.pathname = '/dashboard'
      }
    );
  }

  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }

  async responseHandler(data: any) {
    if(this.errors) this.errors = false;
    this.token.handleData(data);
  }

  toggleShowPassword() {
    return (this.type = !this.type);
  }
}
