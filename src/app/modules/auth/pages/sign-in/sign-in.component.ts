import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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



  constructor(
    public router: Router,
    private formbuilder: FormBuilder,
    private authservice: AuthService,
    private token: TokenService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      username: [''],
      password: [''],
    });
  

  }


  Login(){
    this.authservice.login(this.loginForm.value).subscribe(
      (result) => {
        console.log(result);
        this.responseHandler(result.token);
      },
      (error) => {
        this.errors = error.error;
        console.log("aaa",this.errors);
       
      },
      () => {
        this.loginForm.reset();
        this.router.navigate(['demande']);
      }
    );
  }
  
 
  responseHandler(data:any) {                                                                                                                                                                                                                              
    this.token.handleData(data);
  }

  

}
