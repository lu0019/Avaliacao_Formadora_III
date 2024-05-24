import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CEPService {
  public cep:string = "";
  public caminhoBase:string = "https://viacep.com.br/ws/";
  public formatoRetorno:string = "/json/";

  constructor(public http: HttpClient) { }
  
  public consultarCEP() {
    let endpoint:string = `${this.caminhoBase}${this.cep}${this.formatoRetorno}`;
    return this.http.get(endpoint);
  }
}
