import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaPaisesPage } from '../lista-paises/lista-paises';
import { Continente } from '../../Model/Continente';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public continentes: Continente[];

  constructor(public navCtrl: NavController) {
    // this.continente = navParams.get("Continente");
    var c1 = { nome: 'Africa'};
    var c2 = { nome: 'America'};
    var c3 = { nome: 'Asia'};
    var c4 = { nome: 'Europa'};
    var c5 = { nome: 'Oceania'};
    this.continentes = [c1, c2, c3, c4, c5];

  }

  ListarPaises(continente:Continente){
    this.navCtrl.push(ListaPaisesPage, {continente})
  }

}
