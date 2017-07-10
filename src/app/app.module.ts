import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { SharedModule } from './shared/shared.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { MoviesModule } from './movies/movies.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    MoviesModule,
    DropdownModule
  ],
  bootstrap: [
     AppComponent
  ]
})
export class AppModule { }
