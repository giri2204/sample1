import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { OrderComponent } from './order/order.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path: 'order', component: OrderComponent, canActivate:[AuthGuard]},
{path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
