import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
})
export class ProfileMenuComponent implements OnInit {
  public isMenuOpen = false;
  
  user: any = [];

  constructor(
    private router: Router,
    private authservice: AuthService,
    private token: TokenService
  ) {}

  ngOnInit(): void {
   
  }


 Logout(){
  this.authservice.logout().subscribe(()=>{
    this.token.removeToken();
    this.router.navigate(['sign-in']);
  })
 }

 public toggleMenu(): void {
  this.isMenuOpen = !this.isMenuOpen;
}


}
