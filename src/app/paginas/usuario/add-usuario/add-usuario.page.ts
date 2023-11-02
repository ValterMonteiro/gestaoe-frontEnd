import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/domain/usuario.service';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
})
export class AddUsuarioPage implements OnInit {

  usuarioForm!: FormGroup;

  public pessoa = {
    nome: "",
    CPF: "",
    telefone: "",
    email: "",
    senha: ""
  }

  hasErrors = false;
  errorsMessage!: string[];

  validationMessages = {
    nome: [
      { type: 'required', message: 'Nome é obrigatório' },
      { type: 'minlength', message: 'Nome deve ter ao menos 5 caracteres' },
      { type: 'maxlength', message: 'Nome não pode ter mais 50 caracteres' }
    ],
    email: [
      { type: 'required', message: 'Email é obrigatório' }
    ]
  }

  constructor(private toast: ToastController,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private usuarioService: UsuarioService) { }

  async presentAlert(header: string, subHeader: string, message: string, buttons:
    string[]) {
    const alert = await this.alertController.create({
      header,
      subHeader,
      message,
      buttons
    });
    await alert.present();
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toast.create({
      message: 'Cadastrado com sucesso! ' + this.pessoa.nome,
      duration: 1500,
      position: position,
    });
    await toast.present();
  }

  async submit() {
    this.errorsMessage = [];

    if (this.usuarioForm.get('nome')?.hasError('required')) {
      this.errorsMessage.push("Nome é obrigatório");
    }
    if (this.usuarioForm.get('email')?.hasError('required')) {
      this.errorsMessage.push("E-mail é obrigatório");
    }
    this.hasErrors = this.errorsMessage.length > 0;


    console.log(this.usuarioForm.value);
    this.usuarioService.insert(this.usuarioForm.value).subscribe(response => {
      this.presentAlert('Sucesso', 'Salvar Usuário',
          'Os dados foram salvos com sucesso', ['Ok']);
    })

  }


  ngOnInit() {
    this.usuarioForm = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(5),
      Validators.maxLength(50)])],
      cpf: ['', Validators.compose([Validators.required])],
      telefone: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required,
      Validators.minLength(5), Validators.maxLength(15)])]
    })
  }

}
