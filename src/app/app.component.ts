import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies/movies.service';
import { DropdownOption } from './dropdown/dropdown-option.interface';
import { DropdownSettings } from './dropdown/dropdown-settings.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dropdownSettings: DropdownSettings = {
    title: 'Movies: '
  };

  dropdownOptions: DropdownOption[];

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.getPopular()
      .subscribe(movies => {
        this.dropdownOptions = movies.map(movie => {
          return <DropdownOption> {
            id: movie.id,
            label: movie.original_title
          };
        });
      });
  }

  dropdownOnSelect(option: DropdownOption) {
    console.log(option);
  }
}
