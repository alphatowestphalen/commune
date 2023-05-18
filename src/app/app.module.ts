import { SurveyCreatorModule } from 'survey-creator-angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeaturesComponent } from './modules/features/features.component';
import { SurveyModule } from 'survey-angular-ui';
import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { LoadingInterceptor } from './core/interceptor/loading.interceptor';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { TokenInterceptor } from './core/interceptor/token.interceptor';

@NgModule({
  declarations: [AppComponent, FeaturesComponent, SpinnerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SurveyModule,
    SurveyCreatorModule,
    AngularToastifyModule,
  ],
  providers: [SurveyCreatorModule, SurveyModule, ToastService,
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi:true  },
     {provide: HTTP_INTERCEPTORS, useClass:TokenInterceptor, multi:true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
