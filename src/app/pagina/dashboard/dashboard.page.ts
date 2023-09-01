import { Component, OnInit } from '@angular/core';
import { GestaoE_Service } from 'src/app/gestaoe-back-end.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  produtos: any[] = []; // Defina o tipo de dados de acordo com a estrutura dos seus produtos

  constructor(private gestaoe_produtos: GestaoE_Service) {
    /* this.getDados(); */
   }

  /* getDados() {
    this.gestaoe_produtos.getDados().subscribe(data => {
      console.log(data);
    });
  } */

  ngOnInit() {
    this.gestaoe_produtos.getDados().subscribe(data => {
        this.produtos = data; // Supondo que o serviço retorna uma lista de produtos
      },
      (error) => {
        console.error('Erro ao buscar dados:', error);
      }
    );
  }

}
