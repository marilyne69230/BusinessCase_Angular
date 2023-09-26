import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NftComponent } from './component/nft/nft.component';
import { EthComponent } from './component/eth/eth.component';
import { ContactComponent } from './component/contact/contact.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { ScrollComponent } from './component/home/scroll/scroll.component';
import { AccueilComponent } from './component/home/accueil/accueil.component';
import { CarouselComponent } from './component/home/carousel/carousel.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RegisterComponent } from './component/register/register.component';

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
    RegisterComponent
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
