import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth'; 
 
 
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
 
  newcreds = {
            username: '',
            email: '',
            password: ''
  };
  constructor(public navCtrl: NavController, public authservice: AuthService, public alertCtrl: AlertController) {}
 
  ionViewDidLoad() {
    console.log('Hello Signup Page');
  }
  
  register(user) {
      var data =  this.authservice.adduser(user).subscribe( data => {
        if(data.valid == false){
            let alert = this.alertCtrl.create({
              title:'Oh snap...',
              subTitle:'An error occured durring registration:' + data.message,
              buttons: ['ok']
            });
            alert.present();
      }
      else if(data.name !== null) {
      let alert = this.alertCtrl.create({
                    title: 'Success',
                    subTitle: 'User Created',
                    buttons: ['ok']
                });
                alert.present();
      }
      else {
         let alert = this.alertCtrl.create({
              title:'Oh snap...',
              subTitle:'Unknown error:' + data.message,
              buttons: ['ok']
            });
            alert.present();
      }

      });
            }
}
 