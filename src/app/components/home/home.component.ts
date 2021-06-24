import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public newReleases: any[] = [];
  public loading = true;

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.spotifyService.getNewReleases()
      .subscribe( (data: any) => {
        this.newReleases = data;
        this.loading = false;
        console.log(this.newReleases);
      });
  }



}