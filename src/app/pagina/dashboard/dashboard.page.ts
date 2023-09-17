import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProdutoDTO } from 'src/app/models/produto.dto';
import { ProdutoService } from 'src/app/services/domain/produto.service';
/* import { GestaoE_Service } from 'src/app/gestaoe-back-end.service'; */

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  produtos: ProdutoDTO[] = [];
  data: any[] = []; // Armazene os dados originais aqui
  results: any[] = []; // Armazene os resultados da pesquisa aqui
  resultsById: any[] = [];

  constructor(/* private gestaoe_produtos: GestaoE_Service, */ public nav: NavController,
  public produtoService: ProdutoService) {}

  //findall().subscribe(res => {}, err => {})
ionViewDidEnter(){
  this.produtoService.findAll()
                         .subscribe(response => {
                            this.produtos = response;
                            console.log(response);
                         }, error => {
                            console.log(error);
                         });
}

  ngOnInit() {
    /* this.gestaoe_produtos.getAll().subscribe(
      (data) => {
        this.produtos = data; // Supondo que o serviço retorna uma lista de produtos
        this.data = data; // Armazene os dados originais
        this.results = data; // Inicialize os resultados com os dados originais
      },
      (error) => {
        console.error('Erro ao buscar dados:', error);
      }
    );


    this.gestaoe_produtos.getById().subscribe(
      (data) => {
        this.produtos = data; // Supondo que o serviço retorna uma lista de produtos
        this.data = data; // Armazene os dados originais
        this.resultsById = data; // Inicialize os resultados com os dados originais
      },
      (error) => {
        console.error('Erro ao buscar dados:', error);
      }
    ); */


  }

  handleChange(event: any) {
    const query = event.detail.value.toLowerCase();
    this.results = this.data.filter((produto) => // Filtra os resultados por id ou todos os produtos!
      produto.descricao.toLowerCase().includes(query)
    );
    console.log(this.results);
  }

  handleChangeById(event: any) {
    const query = event.detail.value.toLowerCase();
    this.resultsById = this.data.filter((produto) => // Filtra os resultados por id ou todos os produtos!
      produto.descricao.toLowerCase().includes(query)
    );
    console.log(this.resultsById);
  }

  abrirPagina(x: string) {
    this.nav.navigateForward(x);
  }
}
