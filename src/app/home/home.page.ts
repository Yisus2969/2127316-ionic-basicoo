import { Component , OnInit} from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonButton, IonInput } from '@ionic/angular/standalone';
import { NgFor, NgIf, NgClass} from '@angular/common';
import { BotonComponent } from '../boton/boton.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { GridComponent } from '../grid/grid.component';
import { PomodoroComponent } from '../pomodoro/pomodoro.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, BotonComponent, GridComponent, IonLabel, IonButton, IonInput, FormsModule, NgFor, NgIf, NgClass, PomodoroComponent],
 })
 export class HomePage implements OnInit {
  constructor() {}
  ngOnInit() {}

  verdadero: boolean = true;
  falso: boolean = false;
  title: string = 'Mi nueva pagina!';

  hazmeClic(): void {
    alert("hiciste click!");
  }
  imgUrl: string = 'https://c.tenor.com/CBJ7HeRsMJwAAAAC/monkey-teclado.gif';

  nombreAlumno: string = '';
}