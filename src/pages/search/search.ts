import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { AuthService } from '../../providers/auth';

/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  constructor(public navCtrl: NavController,
  public authservice: AuthService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  search() {

  }
}
