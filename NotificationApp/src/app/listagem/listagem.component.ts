import { Component } from '@angular/core';

@Component({
  selector: 'ntap-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {
  title = 'NotificationApp';

  noticias : Noticia[] = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.noticias.push(
        {
          title: "Titulo" + i,
          subtitle: "Subtitulo" + i,
          data: "Data" + i
        }
      )
    }
  }
}
class Noticia {
  title: string;
  subtitle: string;
  data: any;
  constructor(title: string, subtitle: string, data: string) {
    this.title = title
    this.subtitle = subtitle
    this.data = data
  }
}
