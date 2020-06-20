import { Component, OnInit, OnDestroy} from '@angular/core';
import { MediaChange, MediaObserver} from '@angular/flex-layout'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  
  title = 'nav-example';
  subscription:Subscription
  deviceXS:Boolean

  constructor(private _mediaObserver:MediaObserver){}

  ngOnInit(){
    this.subscription = this._mediaObserver.media$.subscribe((data:MediaChange)=>{
      this.deviceXS = data.mqAlias === 'xs' ? true : false
      console.log(this.deviceXS)
      console.log(data.mqAlias)
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
