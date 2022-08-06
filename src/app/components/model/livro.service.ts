import { Injectable } from '@angular/core';
import { Livro } from './livro';


@Injectable({
  providedIn: 'root'
})
export class LivroService {

  livros:Livro[] = [
    {
      nome:"Harry Potter - A Pedra Filosofal",
      imagem:"https://images-na.ssl-images-amazon.com/images/I/61jgm6ooXzL.jpg",
      categoria:"Mistério",
      codigo:"502"
    },
    {
      nome:"Game of Thrones",
      imagem:"https://images-na.ssl-images-amazon.com/images/I/71FZSPKM0lL.jpg",
      categoria:"Luta",
      codigo:"325"
    },
    {
      nome:"As Crônicas de Nárnia",
      imagem:"https://images-na.ssl-images-amazon.com/images/I/71yJLhQekBL.jpg",
      categoria:"Mistério",
      codigo:"221"
    },
    {
      nome:"Crepúsculo",
      imagem:"https://culturadoria.com.br/wp-content/uploads/2020/05/crep%C3%BAsculo-instr%C3%ADnseca.jpg",
      categoria:"Romance",
      codigo:"142"
    }
  ]

  constructor() { }

  pegarLivros(){
    return this.livros;
  }
}
