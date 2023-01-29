import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from 'src/app/shared/components-pages/snack-bar/snack-bar.component';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {

  isLinear = false
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

  constructor( private _snackBar: MatSnackBar ) { }

  ngOnInit(): void {}

  handlePartner(form: NgForm) {

    if(form.value.cpf != this.partner.cpf.replaceAll(/[.-]/g,'')) {
      this._snackBar.openFromComponent(SnackBarComponent, {
        duration: 5000
      })
    }

    return false

  }
  

}
