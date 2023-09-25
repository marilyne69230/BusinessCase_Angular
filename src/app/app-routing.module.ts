import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EthComponent } from './component/eth/eth.component';
import { NftComponent } from './component/nft/nft.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { authGuard } from './auth.guard';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path:'user', component: UserComponent, canActivate: [authGuard]},
  { path: 'eth', component:EthComponent},
  { path: 'nft', component: NftComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
