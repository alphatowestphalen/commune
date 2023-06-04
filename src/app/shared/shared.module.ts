import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveHelperComponent } from './components/responsive-helper/responsive-helper.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { SearchPipe } from './pipes/search.pipe';
import { TimeInputDirective } from './directives/time-input.directive';

@NgModule({
  declarations: [ResponsiveHelperComponent, ClickOutsideDirective, SearchPipe, TimeInputDirective],
  imports: [CommonModule],
  exports: [ResponsiveHelperComponent, ClickOutsideDirective,SearchPipe, TimeInputDirective],
})
export class SharedModule {}
