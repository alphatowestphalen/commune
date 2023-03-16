import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { TokenService } from 'src/app/core/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {

  user: any = [];

  constructor(
    private router: Router,
    private authservice: AuthService,
    private token: TokenService
  ) {}

  ngOnInit(): void {
    this.CurrentUser();
  }


 CurrentUser(){
  this.authservice.profile().subscribe(data=>{
    this.user = data
    console.log(this.user)
  })
 }

 Logout(){
  this.authservice.logout().subscribe(()=>{
    this.token.removeToken();
    this.router.navigate(['sign-in']);
  })
 }


}
