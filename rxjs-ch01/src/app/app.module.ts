import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FocusWithin } from './trackFocus.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, FocusWithin],
  bootstrap: [AppComponent]
})
export class AppModule {}
