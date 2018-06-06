import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pais } from '../../Model/Pais';
import { DetalhePage } from '../detalhe/detalhe';
import { PaisProvider } from '../../providers/pais/pais';

/**
 * Generated class for the ListaPaisesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-lista-paises',
	templateUrl: 'lista-paises.html',
	providers: [
	  PaisProvider
	]
})
export class ListaPaisesPage {
	public paises = Array<any>();
	public continente;

	constructor(public navCtrl: NavController, public navParams: NavParams, public paisProvider: PaisProvider) {
		this.continente = navParams.get("continente");
		//var l1 = { bandeira: 'assets/img/bra.png', nome: 'Brasil', regiao: 'America', capital: 'Brasilia', moeda: 'Real' };
		//var l2 = { bandeira: 'assets/img/jpn.png', nome: 'Japão', regiao: 'Asia', capital: 'Tóquio', moeda: 'Ien' };
		//var l3 = { bandeira: 'assets/img/esp.png', nome: 'Espanha', regiao: 'Europa', capital: 'Madrid', moeda: 'Euro' };
		//var l4 = { bandeira: 'assets/img/mar.png', nome: 'Marrocos', regiao: 'Africa', capital: 'Rabat', moeda: 'Dirham marroquino' };
		//this.paises = [l1, l2, l3, l4];
		console.log(this.continente);
	}
	irParaDestino(pais: Pais): void {
		this.navCtrl.push(DetalhePage, { paisSelecionado: pais });
	}
	

	ionViewDidLoad() {
		this.paisProvider.getPaises().subscribe(
		  data => {
			const response = (data as any);
			const objeto_retorno = JSON.parse(response._body);
			this.paises = objeto_retorno;
			if(this.continente && this.continente != 'Todos'){
				this.paises = this.paises.filter(pais => pais.region == this.continente);
			}
			console.log(objeto_retorno);
		  }, error => {
			console.log(error)
		  }
		)
		console.log('ionViewDidLoad ListaPaisesPage');
	  }
}
