import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {

  isLinear = false;
  steps = [
    'Início',
    'Documentos',
    'Dados cadastrais',
    'Admissão'
  ]

  constructor() { }

  ngOnInit(): void {
  }
  

}
