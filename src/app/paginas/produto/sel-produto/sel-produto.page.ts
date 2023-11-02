import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ProdutoDTO } from 'src/app/models/produto.dto';
import { ProdutoService } from 'src/app/services/domain/produto.service';
/* import { GestaoE_Service } from 'src/app/gestaoe-back-end.service'; */

@Component({
  selector: 'app-sel-produto',
  templateUrl: './sel-produto.page.html',
  styleUrls: ['./sel-produto.page.scss'],
})
export class SelProdutoPage implements OnInit {

  produtos!: ProdutoDTO[];
  /* produtos: ProdutoDTO[] = []; */
  /* data: any[] = []; */ // Armazene os dados originais aqui
  /* results: any[] = []; */ // Armazene os resultados da pesquisa aqui
  /* resultsById: any[] = []; */


  constructor(
    /* private gestaoe_produtos: GestaoE_Service, */
    public produtoService: ProdutoService,
    public navController: NavController) { }

  //findall().subscribe(res => {}, err => {})
  ionViewDidEnter() {
    this.produtoService.findAll()
      .subscribe({
        next:
          (response) => this.produtos = response,
        error:
          (error) => console.log(error)
      });
  }

  addEdiProduto(){
    this.navController.navigateForward('add-edit-produto');
  }

  excluirProduto(id: number){
    this.produtoService.delete(id)
                           .subscribe({
                              next:
                                (response) => window.location.reload(),
                              error:
                                (error) => console.log(error)
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

  /* handleChange(event: any) {
    const query = event.detail.value.toLowerCase();
    this.results = this.data.filter((produto) => // Filtra os resultados por id ou todos os produtos!
      produto.descricao.toLowerCase().includes(query)
    );
    console.log(this.results);
  } */

  /* handleChangeById(event: any) {
    const query = event.detail.value.toLowerCase();
    this.resultsById = this.data.filter((produto) => // Filtra os resultados por id ou todos os produtos!
      produto.descricao.toLowerCase().includes(query)
    );
    console.log(this.resultsById);
  } */

  abrirPagina(x: string) {
    this.navController.navigateForward(x);
  }
}
