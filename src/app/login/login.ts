import { Component } from '@angular/core';
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
    
    user ={ "name":'', "password":''};
    
    constructor (private http: Http) {};
    
    onSubmit() {
        
        let test_this = { "search": "person" };
        let headers = new Headers ({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http.post("http://requestb.in/v6sjqbv6", test_this, options);
       
        console.log("Submitted successfully");
        console.log(this.user.name);
        console.log(this.user.password);
    }
}
