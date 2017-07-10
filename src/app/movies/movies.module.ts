import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from './movies.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    MoviesService
  ]
})
export class MoviesModule { }
