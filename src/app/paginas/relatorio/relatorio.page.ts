import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RelatorioDTO } from 'src/app/models/relatorio.dto';
import { RelatorioService } from 'src/app/services/domain/relatorio.service';
/* import { GestaoE_Service } from 'src/app/gestaoe-back-end.service'; */

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.page.html',
  styleUrls: ['./relatorio.page.scss'],
})
export class RelatorioPage implements OnInit {
  relatorioData: any[] = [];
  data: any[] = []; // Armazene os dados originais aqui
  results: any[] = []; // Armazene os resultados da pesquisa aqui


  relatorio!: RelatorioDTO[];

  constructor(public nav: NavController/* , private gestaoe_produtos: GestaoE_Service */,
  public relatorioService: RelatorioService) { }

//findall().subscribe(res => {}, err => {})
ionViewDidEnter(){
  this.relatorioService.findAll()
                         .subscribe(response => {
                            this.relatorio = response;
                            console.log(response);
                         }, error => {
                            console.log(error);
                         });
}

  abrirPagina(x: string) {
    this.nav.navigateForward(x);
  }

  ngOnInit() {

  }

}
