import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Heroe, HeroesService } from "../../services/heroes.service";
import { Toast } from "node_modules/bootstrap/dist/js/bootstrap.esm.js";

@Component({
  selector: 'app-heroes-result',
  templateUrl: './heroes-result.component.html',
  styleUrls: ['./heroes-result.component.css']
})
export class HeroesResultComponent implements OnInit {

  public heroes:Heroe[] = [];

  constructor (
    private _heroesService:HeroesService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      console.log(params)
      this.heroes = this._heroesService.buscarHeroes(params['termino'])

      console.log(this.heroes.length);
      if ( this.heroes.length == 0 ) {

        // Array.from(document.querySelectorAll('.toast'))
        //   .forEach(toastNode => new Toast(toastNode))
      }
    })

  }

  verHeroe( idx:number ) {
    this.router.navigate(['/heroe', idx])
  }


}
