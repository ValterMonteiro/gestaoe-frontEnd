import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { ProdutoDTO } from 'src/app/models/produto.dto';
import { RelatorioDTO } from 'src/app/models/relatorio.dto';
import { ProdutoService } from 'src/app/services/domain/produto.service';
import { RelatorioService } from 'src/app/services/domain/relatorio.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  produtos!: ProdutoDTO[];
  data: any[] = [];
  results: any[] = [];
  resultsById: any[] = [];

  relatorio!: RelatorioDTO[];

  /* dashboard teste */
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;

  /* dashboard teste */


  constructor(
    public relatorioService: RelatorioService,
    public produtoService: ProdutoService,
    public navController: NavController,
    private route: ActivatedRoute,
    private httpClient: HttpClient) {
      this.localData();
     }

  /* testeDashboard() {
    this.localData();
  } */

  /* ionViewDidEnter() {
    this.relatorioService.findAll(1)
      .subscribe(response => {
        this.relatorio = response;
        console.log(response);
      }, error => {
        console.log(error);
      });
  } */

  relatorioProduto(x: string) {
    this.navController.navigateForward('relatorio');
  }

  sair(x: string) {
    this.navController.navigateForward('sel-produto');
  }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    console.log("O ID passado é " + id);
    this.relatorioService.findAll(id)
      .subscribe(response => {
        this.relatorio = response;
        console.log(response);
      }, error => {
        console.log(error);
      });
   }

  localData() {
    const request: string =

    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=PETR4.SA&interval=5min&apikey=4594F3S46TWWNI95`;

    this.httpClient.get(request).subscribe(res => {
      console.log(res);
      const data: any = (res as any).data;
      for (let i = 0; i < data; i++) {
        console.log(data[i].symbol);
      }
    });
  }

}
