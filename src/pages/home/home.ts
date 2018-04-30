import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items:any;
  constructor(public navCtrl: NavController, public http: HttpClient) {
  this.loadData();
  }

  loadData(){
    let data:Observable<any>
    data= this.http.get('http://182.19.82.186:94/api/mobtrans');
    data.subscribe(result=> {
      this.items = result;
    })
  }
  itemClick(itemmobile:number){
    alert(itemmobile);
  }
}
