import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { BotonComponent } from '../boton/boton.component';
import { GridComponent } from '../grid/grid.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, BotonComponent, GridComponent],
 })
export class HomePage {
  constructor() {}
}
