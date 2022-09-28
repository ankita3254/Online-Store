import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import { CartComponent} from './cart/cart.component';
import { CollectionComponent} from './collection/collection.component';
import { ContactComponent} from './contact/contact.component';
import { FeaturesComponent} from './features/features.component';
import { SigninComponent} from './signin/signin.component';
import { SignupComponent} from './signup/signup.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'clothes',
    component:FeaturesComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'collection',
    component:CollectionComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'features',
    component:FeaturesComponent
  },
  {
    path:'signin',
    component:SigninComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
