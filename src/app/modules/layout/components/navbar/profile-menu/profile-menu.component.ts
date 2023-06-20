import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { TokenService } from 'src/app/core/services/token.service';
import { TranslocoService } from '@ngneat/transloco';

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
    private token: TokenService,
    public translocoService: TranslocoService
  ) {}

  switchLanguage(lang: string) {
    this.translocoService.setActiveLang(lang);
    // location.reload();
  }

  ngOnInit(): void {
   
  }


 Logout(){
  this.authservice.logout()
 }

 public toggleMenu(): void {
  this.isMenuOpen = !this.isMenuOpen;
}


}
