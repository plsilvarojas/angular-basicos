import { Component } from '@angular/core';

@Component({
  selector: 'app-listados',
  templateUrl: './listados.component.html'
})
export class ListadosComponent {

  heroes:string []=['Spiderman','Ironman','Hulk','Thor','Capitan America','Vida Negra','Hockay'];
  heroeBorrado:string ='';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift()||'';
  }




}
