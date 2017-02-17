
// Entry point of our application

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

@NgModule({
  imports:      [ BrowserModule ], // Inject built-in modules
  declarations: [ ], // Inject your own modules
  bootstrap:    [ AppComponent ] // Module you need to bootstrap
})
export class AppModule { }
