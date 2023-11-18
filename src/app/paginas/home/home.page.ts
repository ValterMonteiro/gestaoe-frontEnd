import { Component, OnInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import { disableDebugTools } from '@angular/platform-browser';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  imagensGrid!: any[];

  constructor(public nav: NavController) { }

  produtos(){
    this.nav.navigateForward('sel-produto');
  }

  equipamentoItem(){
    this.nav.navigateForward('add-edit-equipamento-item');
  }

  ngOnInit() {
    this.imagensGrid = [
      {
        img: 'assets/images/cadastro.png',
        name: 'Cadastro'
      },
      {
        img: 'assets/images/compras.png',
        name: 'Compras'
      },
      {
        img: 'assets/images/produtos.png',
        name: 'Produtos'
      },
      {
        img: 'assets/images/vendas.png',
        name: 'Vendas'
      }
    ]
  }

  navegacao(){
    this.nav.navigateForward('sel-produto');

  }

}
