import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pais } from '../../model/pais';

/**
 * Generated class for the DetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {
  public pais:Pais;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pais = navParams.get("paisSelecionado");
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhePage');
  }

}
