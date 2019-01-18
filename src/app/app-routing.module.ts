import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {ContentComponent} from './components/content/content.component';
import {UserService} from './services/user.service';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'content', component: ContentComponent, canActivate: [UserService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
