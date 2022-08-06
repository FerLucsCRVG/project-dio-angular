import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioShopBookComponent } from './components/inicio-shop-book/inicio-shop-book.component';
import { ListaShopBookComponent } from './components/lista-shop-book/lista-shop-book.component';

const routes: Routes = [
  {path:"",component:InicioShopBookComponent},
  {path:"list",component:ListaShopBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
