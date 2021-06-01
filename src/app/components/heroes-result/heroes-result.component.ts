import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Heroe, HeroesService} from "../../services/heroes.service";

@Component({
  selector: 'app-heroes-result',
  templateUrl: './heroes-result.component.html',
  styleUrls: ['./heroes-result.component.css']
})
export class HeroesResultComponent implements OnInit {

  public heroes:Heroe[] = [];

  constructor(
    private _heroesService:HeroesService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      console.log(params)
      this.heroes = this._heroesService.buscarHeroes(params['termino'])
    })
  }

  verHeroe( idx:number ) {
    this.router.navigate(['/heroe', idx])
  }


}
