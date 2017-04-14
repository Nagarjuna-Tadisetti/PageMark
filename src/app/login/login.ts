import { Component } from '@angular/core';
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
    
    user ={ "name":'', "password":''};
    
    constructor (private http: Http, private router: Router) {};
    
    onSubmit() {
        
        let test_this = { "search": "person" };
        let headers = new Headers ({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http.post("https://requestb.in/v6sjqbv6", test_this, options);
        this.router.navigate(['/cards']);
        console.log("Submitted successfully");
        console.log(this.user.name);
        console.log(this.user.password);
    }
}
