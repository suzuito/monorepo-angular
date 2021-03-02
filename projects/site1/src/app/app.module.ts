import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Lib1Service } from 'lib1';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Lib1Service,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
