import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth';
import { NotificationPage } from '../notification/notification';
import { ChatPage } from '../chat/chat';
import { CalendarPage } from '../calendar/calendar';
import { SearchPage } from '../search/search';


import { HomePage } from '../home/home';
 
/*
  Generated class for the Userpage page.
 
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-front',
  templateUrl: 'front.html'
})
export class FrontPage {
 
    username ='';
    email = '';
    picture = '';

  constructor(
      public navCtrl: NavController,
      public authservice: AuthService, 
      public alertCtrl: AlertController
      ) {
            console.log(this.authservice.UserData);              
          if(this.authservice.isLoggedin == true){
            this.username = this.authservice.UserData.name;
            this.email = this.authservice.UserData.email;
            this.picture = this.authservice.UserData.picture;
          }
          else if (this.authservice.loadUserCredentials() == true) {
            this.username = this.authservice.UserData.name;
            this.email = this.authservice.UserData.email;
            this.picture = this.authservice.UserData.picture;
          }
          else {
              this.logout();    
                  }
         // console.log(this.username);
            //    console.log(this.authservice.AuthToken,"front auth");
    //  this.authservice.getinfo().subscribe(data =>{
       //          
              //  console.log(this.username);
     //   });
  }
 
  ionViewDidLoad() {
 
         
            
         
  }
  
  logout() {
        this.authservice.logout();
        this.navCtrl.setRoot(HomePage);
    }
    

            
    notifications(){
    this.navCtrl.push(NotificationPage);
    }
    search(){
    this.navCtrl.push(SearchPage);

    }
    calendar() {
    this.navCtrl.push(CalendarPage);

    }
    chat(){
    this.navCtrl.push(ChatPage);

    }

}