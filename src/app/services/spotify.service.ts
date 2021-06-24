import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private baseUrl = 'https://api.spotify.com/v1/';
  private autorizationToken = 'Bearer BQBycCDFkPlONuu-zzwLaeMGJBjYE9orWAQVhS5VX-O1LeNQVBIVQ3BvPxq-Q6hYg3MLZj9UHuM9_ocqd_I3E1rpRiwzQPdpriQMLPiA3tAL8-JC89U7LA-b71u9HCNloBdanxZOl_mPF72j4crladpk5YZN0K0';

  getQuery(query: string): any {
    const url = this.baseUrl + query;
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: this.autorizationToken
    });
    return this.http.get(url, { headers });
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

}
