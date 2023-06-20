import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { TokenService } from 'src/app/core/services/token.service';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {

  constructor(private translocoService: TranslocoService ) {}
  switchLanguage(lang: string) {
    this.translocoService.setActiveLang(lang);
    // location.reload();
  }
  ngOnInit(): void {
  
  }





}
