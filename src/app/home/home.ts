import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
    items;
    constructor(){
        this.items =  ["link one","link two","link three","link four","link five","link six","link one","link two","link three","link four","link five","link three","link four","link five"];
    }
}
