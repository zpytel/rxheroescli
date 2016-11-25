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
  private selected:Hero
  private lennum:number=0
  constructor(private store:Store<Hero[]>,private actions:HeroActions,private router:Router) { 
    this.heroes=store.select("heroes")
   
    
  }

  ngOnInit() {
   this.store.dispatch(this.actions.loadHeroes())
   
  }
  private checkIfSelected(){
   this.heroes.subscribe((item)=>{ item.map((hero:Hero)=>{
       if(hero.selected==true){
        this.selected=hero;
     }
    })
    
   });
  }
  selectItem(item:Hero){
   this.store.dispatch(this.actions.selectItem(item))
   this.checkIfSelected();
  }

  deleteHero(hero:Hero){
    this.store.dispatch(this.actions.deleteHero(hero))
    this.selected=null;
  }
  addHero(name:string){
    this.store.dispatch(this.actions.addHero({id:0,name:name,selected:false}))
    
  }
  updateHero(name:String){
    if(this.selected){
      let updatedHero=Object.assign({},this.selected,{name:name});
    
      this.store.dispatch(this.actions.updateHero(updatedHero))
      this.selected=null;
    }

  }

}
