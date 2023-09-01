import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GestaoE_Service {

  private baseUrl: string = 'http://localhost:8080/api'; // Substitua pela URL do seu back-end

  constructor(private http: HttpClient) { }

  // Exemplo de função para fazer uma solicitação GET
  getDados(): Observable<any> {
    const url = `${this.baseUrl}/produtos`;
    console.log();
    return this.http.get(url);
  }

}
