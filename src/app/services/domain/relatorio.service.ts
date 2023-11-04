import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "src/app/config/api.config";
import { RelatorioDTO } from "src/app/models/relatorio.dto";


@Injectable()
export class RelatorioService {

  constructor(public http: HttpClient) {
  }

  //Iniciando a consulta na API
  //Crie um método findAll() e passe a URL do mapeamento
  findAll(id: number): Observable<RelatorioDTO[]> {
    return this.http.get<RelatorioDTO[]>(`${API_CONFIG.baseUrl}/produtos/controleDeEstoque/${id}`)
  }
}



