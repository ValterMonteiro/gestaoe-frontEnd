import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { ProdutoService } from 'src/app/services/domain/produto.service';

@Component({
  selector: 'app-add-edit-produto',
  templateUrl: './add-edit-produto.page.html',
  styleUrls: ['./add-edit-produto.page.scss'],
})
export class AddEditProdutoPage implements OnInit {

  public modoDeEdicao = false;

  produtoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private navController: NavController,
    private route: ActivatedRoute,
    public produtoService: ProdutoService) { }

  addEditProduto() {
    this.navController.navigateForward('add-edit-produto');
  }

  submit() {
    if (this.modoDeEdicao) {
      this.produtoService.insert(this.produtoForm.value).subscribe(response => {
        this.presentAlert(
          'Sucesso',
          'Salvar Produto',
          'Produto salvo com sucesso!', ['OK']);
      })
    }
    if(!this.modoDeEdicao){
      this.produtoService.update(this.produtoForm.value).subscribe(response => {
        this.presentAlert(
          'Sucesso',
          'Alterar Produto',
          'Produto salvo com sucesso!', ['OK']);
      })
    }
  }

  ngOnInit() {

    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    console.log("O ID passado é " + id);

    if (id > 0) {
      this.modoDeEdicao = false;
      this.produtoService.findById(id).subscribe(response => {
        this.produtoForm = this.formBuilder.group({
          id: [response.id],
          data: ['', Validators.required],
          descricao: ['', Validators.required]
        })
      })
    } else {
      this.modoDeEdicao = true;
      this.produtoForm = this.formBuilder.group({
        id,
        data: ['', Validators.required],
        descricao: ['', Validators.required]
      })
    }

  }

  async presentAlert(header: string, subHeader: string, message: string, buttons:
    string[]) {
    const alert = await this.alertController.create({
      header,
      subHeader,
      message,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navController.navigateForward('sel-produto');
          }
        }
      ]
    });
    await alert.present();
  }
}
