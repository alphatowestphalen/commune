import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { TranslocoService } from '@ngneat/transloco';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private menuService: MenuService,public translocoService: TranslocoService) {}
  switchLanguage(lang: string) {
    this.translocoService.setActiveLang(lang);
    // location.reload();
  }

  ngOnInit(): void {}

  public toggleMobileMenu(): void {
    this.menuService.showMobileMenu = true;
  }
}
