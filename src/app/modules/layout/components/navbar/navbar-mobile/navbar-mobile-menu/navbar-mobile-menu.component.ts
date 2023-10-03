import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuService } from 'src/app/modules/layout/services/menu.service';
import { MenuItem, SubMenuItem } from 'src/app/core/models/menu.model';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-navbar-mobile-menu',
  templateUrl: './navbar-mobile-menu.component.html',
  styleUrls: ['./navbar-mobile-menu.component.scss'],
})
export class NavbarMobileMenuComponent implements OnInit {
  public pagesMenu$:MenuItem[];
  public showSideBar$: Observable<boolean> = new Observable<boolean>();

  constructor(private menuService: MenuService,private tokenService: TokenService) {
  }

  public toggleMenu(subMenu: SubMenuItem) {
    this.menuService.toggleMenu(subMenu);
  }

  public closeMenu() {
    this.menuService.showMobileMenu = false;
  }

  ngOnInit(): void {
    this.showSideBar$ = this.menuService.showSideBar$;
    if(!this.tokenService.hasRole("maire")){
      this.pagesMenu$ = this.menuService.pagesMenu$.slice(0, 4) as Array<MenuItem>;
    }else{
      this.pagesMenu$ = this.menuService.pagesMenu$ as Array<MenuItem>;
    }
  }
}
