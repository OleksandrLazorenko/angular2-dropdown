import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '../../environments/environment';
import { Movie } from './movie.interface';

@Injectable()
export class MoviesService {
  private baseUrl = 'https://api.themoviedb.org/3/movie';

  constructor(private http: Http) {}

  getPopular(): Observable<Movie[]> {
    return this.http.get(`${this.baseUrl}/popular?api_key=${environment.themoviedb.api_key}`)
      .map((response: Response) => {
        const body = response.json();

        return <Movie[]> body.results;
      })
      .catch(this.handleError);
  }

  private handleError(response: Response) {
    console.error(response);

    return Observable.throw(response.json().status_message || 'Server error');
  }
}
