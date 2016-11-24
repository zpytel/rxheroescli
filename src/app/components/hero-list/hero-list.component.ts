import { Component, OnInit,EventEmitter,Output,Input,ChangeDetectionStrategy  } from '@angular/core';
import { Observable} from "rxjs/Observable"
import {Hero} from "../../models/hero"
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HeroListComponent implements OnInit {

  constructor() { }
  @Input()heroes:Observable<any>;
  @Output() onSelected=new EventEmitter<Hero>();
  private  arrows={selected:"arrow_forward",diselected:"arrow_upwards"}
  private icon
  selectItem(hero:Hero){
    
    this.onSelected.emit(hero)
  }
  ngOnInit() {
    this.icon=this.arrows.diselected;
  }

}
