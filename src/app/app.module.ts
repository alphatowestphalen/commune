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
  ],
  providers: [SurveyCreatorModule, SurveyModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
