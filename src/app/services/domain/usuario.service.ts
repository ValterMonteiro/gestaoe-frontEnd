import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "src/app/config/api.config";
import { UsuarioDTO } from "src/app/models/usuario.dto";

@Injectable()
export class UsuarioService {

constructor(public http:HttpClient) { }

insert(usuario: UsuarioDTO){
  return this.http.post(`${API_CONFIG.baseUrl}/usuarios`, usuario,
    {
      observe: 'response',
      responseType: 'text'
    });
}

}
