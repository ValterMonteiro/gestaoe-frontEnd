import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.page.html',
  styleUrls: ['./relatorio.page.scss'],
})
export class RelatorioPage implements OnInit {

  constructor(public nav: NavController) { }

  abrirPagina(x: string) {
    this.nav.navigateForward(x);
  }

  ngOnInit() {
  }

}
