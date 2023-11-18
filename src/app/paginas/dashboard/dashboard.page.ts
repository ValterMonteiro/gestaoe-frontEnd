import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ChartConfiguration, ChartDataset, ChartOptions, ChartType, LabelItem } from 'chart.js';
import { ProdutoDTO } from 'src/app/models/produto.dto';
import { RelatorioDTO } from 'src/app/models/relatorio.dto';
import { ProdutoService } from 'src/app/services/domain/produto.service';
import { RelatorioService } from 'src/app/services/domain/relatorio.service';
/* import { Label } from 'ng2-charts'; */

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  produtos!: ProdutoDTO[];
  relatorio!: RelatorioDTO[];
  chartData: ChartDataset[] = [
    { data: [], label: 'Compras' },
    { data: [], label: 'Vendas' }
  ];
  chartDataCompras: ChartDataset[] = [{ data: [], label: 'Compras' }];
  chartDataVendas: ChartDataset[] = [{ data: [], label: 'Vendas' }];
  chartDataGiroDeEstoque: ChartDataset[] = [];
  chartType: ChartType = 'line';
  chartLabels: Array<any> = [];
  id!: number;
  custoDasVendas!: number;
  estoqueMedio!: number;

  constructor(
    public relatorioService: RelatorioService,
    public produtoService: ProdutoService,
    public navController: NavController,
    private route: ActivatedRoute,
    private httpClient: HttpClient) {
    this.localData();
    this.id = Number(this.route.snapshot.paramMap.get('id')) || 0;
    console.log('ID dashboard:', this.id);
  }

  ionViewDidEnter() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    console.log("O ID passado é " + id);
    this.relatorioService.findAll(id)
      .subscribe(response => {
        this.relatorio = response;
        console.log(response);
      }, error => {
        console.log(error);
      });

    this.produtoService.findAll()
      .subscribe({
        next:
          (response) => this.produtos = response,
        error:
          (error) => console.log(error)
      });
  }

  ngOnInit() {
    /* const id: number = Number(this.route.snapshot.paramMap.get('id'));
    console.log("O ID passado é " + id);
    this.relatorioService.findAll(id)
      .subscribe(response => {
        this.relatorio = response;
        console.log(response);
      }, error => {
        console.log(error);
      }); */
  }

  localData() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.relatorioService.findAll(id)
      .subscribe(
        response => {
          this.chartLabels = [];
          this.chartData = [];
          this.chartDataCompras = [];
          this.chartDataVendas = [];
          this.chartDataGiroDeEstoque = [];
          this.calculateStockTurnover();
          this.chartData.push({ data: [], label: 'Compras' }, { data: [], label: 'Vendas' });
          this.chartDataCompras.push({ data: [], label: 'Compras' });
          this.chartDataVendas.push({ data: [], label: 'Vendas' });

          // Agora você pode usar os dados do relatório como necessário
          for (let i = 0; i < response.length; i++) {
            /* console.log(response[i].data); */
            this.chartLabels.push(response[i].data);

            /* grafico de compras e vendas */
            this.chartData[0].data.push(response[i].entradaQuantidade);
            this.chartData[1].data.push(response[i].saidaQuantidade);

            /* grafico de compras */
            this.chartDataCompras[0].data.push(response[i].entradaQuantidade);

            /* grafico de vendas */
            this.chartDataVendas[0].data.push(response[i].saidaQuantidade);

          }
        }, error => {
          console.log(error);
        });
  }

  calculateStockTurnover() {
    const estoqueInicial = 5000; // Valor de exemplo
    const estoqueFinal = 7000; // Valor de exemplo
    this.custoDasVendas = 15000; // Valor de exemplo
    this.estoqueMedio = (estoqueInicial + estoqueFinal) / 2;

    const giroDeEstoque = this.custoDasVendas / this.estoqueMedio;
    console.log('Giro de Estoque:', giroDeEstoque);

    // Agora, vamos inserir esse valor no gráfico de giro de estoque
    this.chartDataGiroDeEstoque.push({ data: [giroDeEstoque], label: 'Giro de Estoque' });
  }

  relatorioProduto(id: number) {
    this.navController.navigateForward(`relatorio/${id}`);
  }

  sair(x: string) {
    this.navController.navigateForward('sel-produto');
  }

  /* calculo do estoque médio */
  /* calcularEstoqueMedio(estoqueInicial: number, estoqueFinal: number): number {
    return (estoqueInicial + estoqueFinal) / 2;
  } */

  // Exemplo de utilização
  /* const estoque = new DashboardPage(15000, 5000, 20000, 7000); // Valores de exemplo
  const giroDeEstoque = estoque.calcularGiroDeEstoque();
console.log("Giro de Estoque:", giroDeEstoque); */

}
