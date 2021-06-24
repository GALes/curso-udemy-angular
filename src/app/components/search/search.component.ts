import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  loading = false;

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
  }

  search(termino: string): void {
    this.loading = true;
    this.spotifyService.search( termino )
      .subscribe( (data: any) => {
        this.artistas = data;
        this.loading = false;
      });
  }

}
