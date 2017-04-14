import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Login } from './login/login';
import { Home } from './home/home';
import { Card } from './card/card';

const routes: Routes = [
    { path: 'cards', component: Home },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: Login }
];

@NgModule({
  declarations: [
    AppComponent,Login,Home,Card
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
