import { Component, inject, OnInit, Inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit {

  snackBarRef = Inject(MatSnackBarRef);

  constructor() { }

  ngOnInit(): void {
  }

}
