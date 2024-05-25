import { Component } from '@angular/core';
import { CEPService } from '../services/cep.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [CEPService]
})
export class Tab2Page {

  public cep:string = "";
  public logradouro:string = "";
  public complemento:string = "";
  public bairro:string = "";
  public localidade:string = "";
  public uf:string = "";
  public ibge:string = "";
  public gia:string = "";
  public ddd:string = "";
  public siafi:string = "";

  constructor(public cepService: CEPService) {}

  botaoConsulta() {
    if (this.cep) {
      this.cepService.consultarCEP(this.cep).subscribe((data) => {
        if (!data.erro) {
          this.logradouro = data.logradouro;
          this.complemento = data.complemento;
          this.bairro = data.bairro;
          this.localidade = data.localidade;
          this.uf = data.uf;
          this.ibge = data.ibge;
          this.gia = data.gia;
          this.ddd = data.ddd;
          this.siafi = data.siafi;
        } else {
          console.error('CEP não encontrado.');
        }
      },
      (error) => {
        console.error('Erro ao buscar o CEP:', error);
      });
    }
  }
}
