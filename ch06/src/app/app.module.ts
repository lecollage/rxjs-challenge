import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TuiRepeatTimesModule} from "@taiga-ui/cdk";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TuiRepeatTimesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
