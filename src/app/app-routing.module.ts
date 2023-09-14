import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EthComponent } from './component/eth/eth.component';

const routes: Routes = [
  { path: 'nft', component:EthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
