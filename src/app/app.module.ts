import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Routes
import { APP_ROUTING } from "./app.routes";

// Services
import { HeroesService } from "./services/heroes.service";

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import {ReactiveFormsModule} from "@angular/forms";
import { HeroesResultComponent } from './components/heroes-result/heroes-result.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    HeroesResultComponent
  ],
    imports: [
        BrowserModule,
        APP_ROUTING,
        ReactiveFormsModule
    ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
