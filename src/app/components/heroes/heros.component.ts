import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {Router}from '@angular/router';

import {HeroActions} from '../../actions/hero.actions'
import {Hero} from '../../models/hero';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  private heroes:Observable<any>;
  private selected:Hero;
  private lennum:number=0
  constructor(private store:Store<Hero[]>,private actions:HeroActions,private router:Router) { 
    this.heroes=store.select("heroes")
   
    
  }

  ngOnInit() {
   this.store.dispatch(this.actions.loadHeroes())
  }

  selectItem(item:Hero){
    if(!item.selected){
        this.selected=item;
    }else{
        this.selected=null; 
    }
    
    this.store.dispatch(this.actions.selectItem(item))
    //this.router.navigate(['/detail/',item.id])
    
  }

  addHero(name:string){
    this.store.dispatch(this.actions.addHero({id:0,name:name,selected:false}))

  }

}
