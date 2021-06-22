import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private autorizationToken = 'Bearer BQD-SKwZfftwpL-huEOK6blxSKRZlnDyWy5JL8SSQ64AzbtTJ3HLHc40pRTvJKvuSclDjVvneZOwHx8NRfiwETkbh-J3I0r-dv-ECxvK2SYfzI9HoSdq9rrHBg02e71nGqrWcuVx3IVM5ZJuN0ZzqIYjQJ0PdNA';
  protected headers: HttpHeaders;

  constructor(
    private http: HttpClient
  ) {
    this.headers = new HttpHeaders({
      Authorization: this.autorizationToken
    });
  }

  getNewReleases(): Observable<any>
  {
    const headers = this.headers;
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

  search(termino: string): Observable<any>
  {
    const headers = this.headers;
    return this.http.get(`https://api.spotify.com/v1/search?query=${ termino }&type=artist&offset=0&limit=20`, { headers });
  }

}
