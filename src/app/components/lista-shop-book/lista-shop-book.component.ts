import { Component, OnInit } from '@angular/core';
import { Livro } from '../model/livro';
import { LivroService } from '../model/livro.service';

@Component({
  selector: 'app-lista-shop-book',
  templateUrl: './lista-shop-book.component.html',
  styleUrls: ['./lista-shop-book.component.css']
})
export class ListaShopBookComponent implements OnInit {
  
  livros?:Livro[];

  constructor(private livrosService:LivroService) {
    this.livros = this.livrosService.pegarLivros();
  }

  ngOnInit(): void {
  }

  

}
