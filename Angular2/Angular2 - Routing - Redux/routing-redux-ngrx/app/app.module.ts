// Entry point of our application
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { BookListComponent } from './components/book/booklist.component';
import { SideBarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  imports: [
      BrowserModule,
      AppRoutingModule
  ],
  declarations: [ 
    AppComponent, 
    HeaderComponent,
    MenuComponent,
    SideBarComponent,
    BookListComponent,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
