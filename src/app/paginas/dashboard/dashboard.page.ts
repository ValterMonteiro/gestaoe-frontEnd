import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(
    public navController: NavController) { }

  relatorioProduto(x: string) {
    this.navController.navigateForward('relatorio');
  }

  sair(x: string) {
    this.navController.navigateForward('sel-produto');
  }

  ngOnInit() {}

}
