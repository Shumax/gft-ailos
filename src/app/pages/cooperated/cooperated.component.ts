import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cooperated',
  templateUrl: './cooperated.component.html',
  styleUrls: ['./cooperated.component.scss','../consultation/consultation.component.scss']
})
export class CooperatedComponent implements OnInit {

  partner: any = {
    nome: "Kaique Kevin Levi Fernandes",
    idade: 59,
    cpf: "143.790.464-51",
    rg: "35.823.439-6",
    data_nasc: "05/01/1964",
    sexo: "Masculino",
    signo: "Capricórnio",
    mae: "Aline Emily",
    pai: "Breno Benício Fernandes",
    email: "kaique_fernandes@ulbra.edu.br",
    senha: "yZxiy4601q",
    cep: "49070-533",
    endereco: "Travessa Cinco",
    numero: 796,
    bairro: "Cidade Nova",
    cidade: "Aracaju",
    estado: "SE",
    telefone_fixo: "(79) 2655-8587",
    celular: "(79) 98862-2163",
    altura: "1,70",
    peso: 50,
    tipo_sanguineo: "AB-",
    cor: "roxo"
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
