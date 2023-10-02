import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NftComponent } from './component/nft/nft.component';
import { EthComponent } from './component/eth/eth.component';
import { ContactComponent } from './component/contact/contact.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserComponent } from './component/user/user.component';
import { ScrollComponent } from './component/home/scroll/scroll.component';
import { AccueilComponent } from './component/home/accueil/accueil.component';
import { CarouselComponent } from './component/home/carousel/carousel.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RegisterComponent } from './component/register/register.component';
import { NewNftComponent } from './component/nft/new-nft/new-nft.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NftComponent,
    EthComponent,
    ContactComponent,
    UserComponent,
    ScrollComponent,
    AccueilComponent,
    CarouselComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    NewNftComponent
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    registerLocaleData(fr.default);  }
}
