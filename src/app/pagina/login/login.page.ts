import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public autenticacao = {
    usuario: "",
    senha: ""
  }

  //NavController é responsável por gerenciar a navegabilidade
  constructor(public nav: NavController, private toast: ToastController, public menu: MenuController) { }

  //Quando entrar na página de Login
  ionViewWillEnter() {
    this.menu.enable(false);
  }
  //Quando sair da página de Login
  ionViewDidLeave() {
    this.menu.enable(true);
  }


  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toast.create({
      message: 'Usuário ou senha incorreto! ' + this.autenticacao.usuario,
      duration: 1500,
      position: position,
    });
    await toast.present();
  }

  abrirPagina(x: string) {
    this.nav.navigateForward(x);
  }

  acessar() {
    if (this.autenticacao.usuario == "admin" && this.autenticacao.senha == "admin") {
      this.abrirPagina('dashboard');
    } else {
      this.presentToast('middle');
    }
  }

  ngOnInit() {
  }

}
