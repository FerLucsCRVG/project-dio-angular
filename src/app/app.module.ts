import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderShopBookComponent } from './components/header-shop-book/header-shop-book.component';
import { FooterShopBookComponent } from './components/footer-shop-book/footer-shop-book.component';
import { InicioShopBookComponent } from './components/inicio-shop-book/inicio-shop-book.component';
import { ListaShopBookComponent } from './components/lista-shop-book/lista-shop-book.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderShopBookComponent,
    FooterShopBookComponent,
    InicioShopBookComponent,
    ListaShopBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
