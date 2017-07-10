import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { Movie } from './movie.interface';

@Injectable()
export class MoviesService {
  private baseUrl = 'https://api.themoviedb.org/3/movie';

  constructor(private http: Http) {}

  getPopular(): Observable<Movie[]> {
    return this.http.get(`${this.baseUrl}/popular?api_key=${environment.themoviedb.api_key}&language=en-US&page=1`)
      .map((response: Response) => {
        let body = response.json();

        return <Movie[]> body.results;
      });
  }
}
