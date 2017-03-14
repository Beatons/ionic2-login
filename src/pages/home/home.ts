import { Component } from '@angular/core';
 
import { NavController, AlertController } from 'ionic-angular';

import { AuthService } from '../../providers/auth';
import { FrontPage } from '../front/front';
import { RegisterPage } from '../register/register';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    public user : any;
    usercreds = {
     email: '',
     password: ''
};
 
  constructor(public navCtrl: NavController, public authservice: AuthService,public alertCtrl: AlertController) {  
    if(this.authservice.isLoggedin == true || this.authservice.AuthToken !== null){
        var fetch = this.authservice.loadUserCredentials();
        if(fetch == true){
            this.navCtrl.setRoot(FrontPage);
        }
      
    }

  }
  ionViewDidLoad() {
     // this.authservice.loadUserCredentials().then(data => {
     //   if(data) {
       //     this.navCtrl.setRoot(FrontPage);
       // }
     // });
    //  if(this.authservice.isLoggedin === true){
      //     this.navCtrl.setRoot(FrontPage);
     // }
  }

  login(user) {
       this.authservice.authenticate(user).subscribe(data => {
           // console.log(data,"data")
                if(data.token !== null){
                this.authservice.storeUserCredentials(data.token,data.user);
                this.authservice.AuthToken = data.token;
                this.authservice.UserData = data.user;
                this.navCtrl.setRoot(FrontPage);
            }
            else {
                let alert = this.alertCtrl.create({
                    title: "Oh snap...",
                    subTitle: "An error has ocured when trying to login.",
                    buttons: ['ok']
                });
                alert.present();
            }
        });
    
     ///  if(this.authservice.isLoggedin == true) {
           
     //  }
         //   this.user = data;
            
             //console.log(data);
       
        /*.then(data => {
            if(data) {
            }
    });*/
}
    signup() {
        this.navCtrl.push(RegisterPage);
    }
 
}