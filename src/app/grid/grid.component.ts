import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { IonGrid, IonRow, IonCol, IonContent, IonToolbar, IonTitle, IonHeader, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonButton, IonLabel } from '@ionic/angular/standalone';

export interface Estudiantes {
  nombre: string;
  apellido: string;
};


@Component({
  selector: 'ejercicios',
  templateUrl: './grid.component.html',
  standalone: true,
  styleUrls: ['./grid.component.scss'],
  imports: [IonGrid, IonRow, IonCol, IonContent, IonToolbar, IonTitle, IonHeader, NgFor, NgIf, NgClass, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonButton, IonLabel]
})

export class GridComponent implements OnInit {
  constructor() { }

  ngOnInit() {}

  verdadero: boolean = true;
  falso: boolean = false;
 
 
  
}