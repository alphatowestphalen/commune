import { ChangeDetectionStrategy, Component, OnInit, Input  } from '@angular/core';
import { Observable,of, map } from 'rxjs';
import { MenuItem, SubMenuItem } from 'src/app/core/models/menu.model';
import { MenuService } from '../../../services/menu.service';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMenuComponent implements OnInit {
  public pagesMenu$:MenuItem[] = [];
  public showSideBar$: Observable<boolean> = new Observable<boolean>();
  @Input() show: boolean;

  constructor(private menuService: MenuService, private tokenService: TokenService) {
  }

  public toggleMenu(subMenu: SubMenuItem) {
    this.menuService.toggleMenu(subMenu);
  }

  ngOnInit(): void {
    this.showSideBar$ = this.menuService.showSideBar$;
    if(!this.tokenService.hasRole("maire")){
      this.pagesMenu$ = this.menuService.pagesMenu$.slice(0, 4) as Array<MenuItem>;
    }else{
      this.pagesMenu$ = this.menuService.pagesMenu$ as Array<MenuItem>;
    }
 // this.pagesMenu$ = this.menuService.pagesMenu$;
  }
}
