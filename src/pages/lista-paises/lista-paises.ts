import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JapaoPage } from '../japao/japao';
import { BrasilPage } from '../brasil/brasil';

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
})
export class ListaPaisesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  DetalhePais(ItemPais) {
    if(ItemPais == 'bra'){
      this.navCtrl.push(BrasilPage);
    }else{
      this.navCtrl.push(JapaoPage);      
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPaisesPage');
  }

}
