import { Injectable,  } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import * as CryptoJS  from 'crypto-js';
import 'rxjs/Rx';

@Injectable()
export class AuthService {
    
    isLoggedin: boolean;
    AuthToken: "";
    UserData;
    
    constructor(public http: Http) {
        
        this.http = http;
        this.isLoggedin = false;
        this.AuthToken;
        this.UserData;
    }
    
    storeUserCredentials(token,userData) {
        window.localStorage.setItem('user', token);
        this.useCredentials(token);
        
    }
    
    useCredentials(token) {
        this.isLoggedin = true;
        this.AuthToken = token;
        this.getinfo().subscribe(data => {
            this.UserData = data;
        });
    }
    
    loadUserCredentials() {

        var token = window.localStorage.getItem('user');
        if(token !== null){
        this.useCredentials(token);
        return true;
        
    }
        else {
            return false;
        }
    }
    
    destroyUserCredentials() {
        this.isLoggedin = false;
        this.AuthToken = null;
        window.localStorage.clear();
    }
    
    authenticate(user) {
      //  console.log(user);
        var parse = CryptoJS.enc.Utf8.parse(user.email.toLowerCase() + ":" + user.password);
        var auth = CryptoJS.enc.Base64.stringify(parse);
        // Basic Auth encription with base 64

        var body = JSON.stringify({
            "access_token":"masterKey"
        });
        var headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + auth
        });
        // request headers and body

        var options = new RequestOptions({headers: headers});
        
        return this.http.post('https://flexsetup.herokuapp.com/auth', body, options )
        .map(res => res.json());

    }

    adduser(user) {
        var body = JSON.stringify({
            "name": user.name,
            "email": user.email.toLowerCase(),
            "password": user.password,
            "access_token": "masterKey"
        });
        var headers = new Headers({
            'Content-Type': 'application/json'
         });
        var options = new RequestOptions({headers: headers});
        
           return this.http.post('http://flexsetup.herokuapp.com/users', body, options)
            .map(res => res.json());
          
    }
    
    getinfo() {
           if(this.isLoggedin !== true){
            this.loadUserCredentials();
           }
              var headers = new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.AuthToken
                
            });
        var options = new RequestOptions({headers: headers});
            
            console.log(this.AuthToken);

            return this.http.get('http://flexsetup.herokuapp.com/users/me',options )
            .map(res => res.json());
           
    }
    
    logout() {
        this.destroyUserCredentials();
        console.log(this.AuthToken)
    }
}