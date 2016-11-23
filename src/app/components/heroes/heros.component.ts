import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../services/heroes.service';
import {Observable} from 'rxjs/Observable';
import {Hero} from '../../models/hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  private heroes:Observable<Hero[]>;
  constructor(private heroservice:HeroesService) { }

  ngOnInit() {
   this.heroes=this.heroservice.getHeroes()
  }

}
