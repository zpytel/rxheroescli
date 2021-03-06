import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import {StoreModule } from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects'

import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HeroDetailComponent} from './components/hero-detail/hero-detail.component';
import {HeroFormComponent} from './components/hero-form/hero-form.component';
import {HeroListComponent} from './components/hero-list/hero-list.component';
import {HerosComponent} from './components/heroes/heros.component';
import {routing} from './routes';
import { AppComponent } from './app.component';
import {HeroesService} from './services/heroes.service';
import {HeroReducer} from './reducers/hero.reducer';
import {HerroEffects} from './effects/hero.effect';
import {HeroActions} from './actions/hero.actions'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HerosComponent,
    HeroFormComponent,
    HeroDetailComponent,
    HeroListComponent,
    HerosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule.forRoot(),
    StoreModule.provideStore({heroes:HeroReducer}),
    EffectsModule.run(HerroEffects)

  ],
  providers: [HeroesService,HeroActions],
  bootstrap: [AppComponent]
})
export class AppModule { }
