import { HttpErrorResponse } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  errors: any;
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
      username: [''],
      password: ['']
    })


  }


  Login($event: any) {
    $event.preventDefault();
    const isNotEmpty = Object.values(this.loginForm.value).every(
      (element) => !!element
    );
    if (!isNotEmpty) {
      Object.values(this.loginForm.value).every((element) => {
        if (element == '') {
          this._toastService.error('Remplissez les champs requis');
          return;
        }
      });
    } else {
      console.log(this.loginForm.value);
      this.authservice.login(this.loginForm.value).subscribe(
        (result) => {
          console.log(result);
          this.responseHandler(result.token);
        },
        (error) => {
          this.errors = error.error;
          if (error.status === 401)
            this._toastService.error('Votre information sont incorrectes');
          console.log('aaa', this.errors);
        },
        () => {
          this.loginForm.reset();
          // this._toastService.success('Vous êtes la bienvenue');
          this.router.navigate(['dashboard/naissance']);
        }
      );
    }

  }

  async responseHandler(data: any) {
    console.log('mydata', data);
    this.token.handleData(data);
  }

  toggleFieldTextType() {
    console.log(this.type);
    return (this.type = !this.type);
  }
}
