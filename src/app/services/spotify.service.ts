import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, ObservableInput, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {NGB_TIMEPICKER_I18N_FACTORY} from "@ng-bootstrap/ng-bootstrap/timepicker/timepicker-i18n";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private baseUrl = 'https://api.spotify.com/v1/';
  private autorizationToken = 'Bearer BQCu-1ffB0MopY4Hs7gIZBHKLv589O-es83j5GMauMkQbTMeIRySXe-QTpUDthgVuzDan5vbcLVqmo5XLv1ytUd7bNwyxkXpWbwnEAV1uRB2t7OO-lQlqO9qRKDXHqGjPjCOOHxGWnY7PCRI5r9_eZuAOenk8fA';

  getQuery(query: string): any {
    const url = this.baseUrl + query;
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: this.autorizationToken
    });
    return this.http.get(url, { headers })
      .pipe(catchError (this.errorHandler));
  }

  private getToken() {
    const url = 'https://accounts.spotify.com/api/token'
    const headers: HttpHeaders = new HttpHeaders({
      grant_type: 'client_credentials',
      client_id: 'bbf2d3940f58444fb57416857d5ebf31',
      client_secret: 'aae7e9aedbaa4e258ee9b84cf2aebffe'
    })
    this.http.post(url, {headers})
      .subscribe(data => console.log(data));
  }

  errorHandler(error: HttpErrorResponse, _this): ObservableInput<any> {

    return throwError(error);
  }

  constructor(
    private http: HttpClient
  ) {  }

  getNewReleases(): Observable<any>
  {
    return this.getQuery(`browse/new-releases?limit=50`)
      .pipe(map((data: any) => data.albums.items ));
  }

  search(termino: string): Observable<any>
  {
    return this.getQuery(`search?query=${ termino }&type=artist&offset=0&limit=50`)
      .pipe(map((data: any) => data.artists.items ));
  }

  getArtist(id: string): Observable<any>
  {
    return this.getQuery(`artists/${id}`);
      // .pipe(map((data: any) => data ));
  }

  getTopTracks(id: string): Observable<any>
  {
    return this.getQuery(`artists/${id}/top-tracks?market=ES`)
      .pipe(map((data: any) => data.tracks ));
  }

}

/*** Error cuando expira el token
{
    "headers": {
        "normalizedNames": {},
        "lazyUpdate": null
    },
    "status": 401,
    "statusText": "OK",
    "url": "https://api.spotify.com/v1/artists/5cj0lLjcoR7YOSnhnX0Po5/top-tracks",
    "ok": false,
    "name": "HttpErrorResponse",
    "message": "Http failure response for https://api.spotify.com/v1/artists/5cj0lLjcoR7YOSnhnX0Po5/top-tracks: 401 OK",
    "error": {
        "error": {
            "status": 401,
            "message": "The access token expired"
        }
    }
}
 */
