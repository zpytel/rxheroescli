import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';
import {Hero} from '../../models/hero'
@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  constructor() { }
  @Input()hero:string;
  @Input()action:string="create"
  @Output()onHeroAdd=new EventEmitter<string>();
  addHero(name:string){
   this.onHeroAdd.emit(name)

  }
  ngOnInit() {
  }

}
