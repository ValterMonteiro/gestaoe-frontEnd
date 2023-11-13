import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ProdutoDTO } from 'src/app/models/produto.dto';
import { RelatorioDTO } from 'src/app/models/relatorio.dto';
import { RelatorioService } from 'src/app/services/domain/relatorio.service';


@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.page.html',
  styleUrls: ['./relatorio.page.scss'],
})
export class RelatorioPage implements OnInit {
  relatorioData: any[] = [];
  data: any[] = []; // Armazene os dados originais aqui
  results: any[] = []; // Armazene os resultados da pesquisa aqui


  produto!: ProdutoDTO[];
  relatorio!: RelatorioDTO[];

  /* varialvel para o id */
  id!: number;

  constructor(
    public nav: NavController,
    private route: ActivatedRoute,
    public relatorioService: RelatorioService) {

    this.id = Number(this.route.snapshot.paramMap.get('id')) || 0;
    console.log('ID relatório:', this.id);
  }

  //findall().subscribe(res => {}, err => {})
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
  }

  voltarDashboard(id: number) {
    this.nav.navigateForward(`dashboard/${id}`);
  }

  sair(x: string) {
    this.nav.navigateForward('sel-produto');
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

}
