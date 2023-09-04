import { Component, OnInit } from '@angular/core';
import { GestaoE_Service } from 'src/app/gestaoe-back-end.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  produtos: any[] = [];
  data: any[] = []; // Armazene os dados originais aqui
  results: any[] = []; // Armazene os resultados da pesquisa aqui

  constructor(private gestaoe_produtos: GestaoE_Service) {}

  ngOnInit() {
    this.gestaoe_produtos.getDados().subscribe(
      (data) => {
        this.produtos = data; // Supondo que o serviço retorna uma lista de produtos
        this.data = data; // Armazene os dados originais
        this.results = data; // Inicialize os resultados com os dados originais
      },
      (error) => {
        console.error('Erro ao buscar dados:', error);
      }
    );
  }

  handleChange(event: any) {
    const query = event.detail.value.toLowerCase();
    this.results = this.data.filter((produto) =>
      produto.descricao.toLowerCase().includes(query)
    );
  }
}
