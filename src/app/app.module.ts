import { SurveyCreatorModule } from 'survey-creator-angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeaturesComponent } from './modules/features/features.component';
import { SurveyModule } from 'survey-angular-ui';
import { ToastService, AngularToastifyModule } from 'angular-toastify';

@NgModule({
  declarations: [AppComponent, FeaturesComponent],
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
  providers: [SurveyCreatorModule, SurveyModule, ToastService],
  bootstrap: [AppComponent],
})
export class AppModule {}
