import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from 'src/app/core/models/menu.model';
import { ThemeService } from 'src/app/core/services/theme.service';
import { TranslocoService } from '@ngneat/transloco';
import { MenuService } from '../../services/menu.service';
import { DashboardService } from 'src/app/modules/dashboard/services/dashboard.service';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public showSideBar$: Observable<boolean> = new Observable<boolean>();
  public pagesMenu$:MenuItem[] ;
  show: boolean = false;
  

  constructor(public themeService: ThemeService, private menuService: MenuService,public translocoService: TranslocoService,private tokenService: TokenService) {
  }

  switchLanguage(lang: string) {
    this.translocoService.setActiveLang(lang);
    // location.reload();
  }

  ngOnInit(): void {
    this.showSideBar$ = this.menuService.showSideBar$;
    if(!this.tokenService.hasRole("maire")){
      this.pagesMenu$ = this.menuService.pagesMenu$.slice(0, 4) as Array<MenuItem>;
    }else{
      this.pagesMenu$ = this.menuService.pagesMenu$ as Array<MenuItem>;
    }
  }

  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }

  toggleTheme() {
    this.themeService.theme = !this.themeService.isDark ? 'dark' : 'light';
  }

  
}
