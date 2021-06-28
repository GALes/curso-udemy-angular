import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  public artista: any = {};
  public topTracks: any[] = [];
  public loading = true;

  constructor(
    private router: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {
    this.router.params.subscribe( (params) => {
      const artistaId = params['id'];
      this.getArtista(artistaId);
      this.getTopTracks(artistaId)
      this.loading = false;
    })
  }

  getArtista(id: string){
    console.log(id);
    this.spotifyService.getArtist(id)
      .subscribe( (artista: any) => {
        console.log(artista);
        this.artista = artista;
      })
  }

  getTopTracks(id: string){
    console.log(id);
    this.spotifyService.getTopTracks(id)
      .subscribe( (topTracks: any) => {
        console.log(topTracks);
        this.topTracks = topTracks;
      })
  }

  ngOnInit(): void {
  }

}
