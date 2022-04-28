import { Component, OnInit, ViewChild } from '@angular/core';
import { CountdownComponent } from './countdown/countdown.component';
import { UserService } from './user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  card: any = {
    titulo: 'Meu Cartao',
    descricao:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    imagemUrl: 'https://www.fillmurray.com/640/360',
  };

  showDropdown: boolean = false;

  showAlert: boolean = true;

  contador = 0;

  error: boolean = false;

  alerts: string[] = [];

  @ViewChild(CountdownComponent) countdown: CountdownComponent;

  users: any[];

  userPage: number = 1;

  userResults: number = 5;

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.carregarUsuarios();
  }

  carregarUsuarios() {
    this.userService
      .getUsers(this.userPage, this.userResults)
      .subscribe((objResult) => {
        this.users = objResult.results;
      });
  }

  trocarQuantidadeDaPagina(quantidade: number) {
    this.userResults = quantidade;
    this.carregarUsuarios();
    this.showDropdown = false;
  }

  moverParaPagina(pagina: number) {
    this.userPage = pagina;
    this.carregarUsuarios();
  }

  moverProximaPagina() {
    this.userPage++;
    this.carregarUsuarios();
  }

  moverPaginaAnterior() {
    if (this.userPage > 1) {
      this.userPage--;
      this.carregarUsuarios();
    }
  }

  resetTo100() {
    this.countdown.count = 100;
  }

  getAlertColor() {
    return 'alert-danger';
  }

  onButtonClick() {
    this.contador++;
  }

  removeLiveAlert(index: number) {
    this.alerts.splice(index, 1);
  }

  onLiveAlertClick() {
    this.alerts.push('Nice, you triggered this alert message!');
  }

  onClick(evento) {
    console.log(evento);
    this.card.titulo = 'Clicou!';
  }

  exemploClick() {
    console.log('Exemplo click!');
  }
}
