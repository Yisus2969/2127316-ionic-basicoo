import { Component, OnInit } from '@angular/core';

import { IonCard, IonCardHeader, IonCardContent, IonTitle, IonToolbar, IonButton, IonCardTitle, IonHeader, IonContent} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  standalone: true,
  styleUrls: ['./pomodoro.component.scss'],
imports: [  IonCard, IonCardHeader, IonCardContent, IonTitle, IonToolbar, IonButton,CommonModule,IonCardTitle, IonHeader, IonContent ]
})




export class PomodoroComponent {
  esPomodoro: boolean = true;  // estado incial 
  temporizador: string = '25:00';  // constante para pomodoro de 25 minutos
  intervalo: any;  

  alternarModo(modo?: string) { //alternamos y usamos respectivamente el modo
    if (modo) {
      this.esPomodoro = modo === 'pomodoro';
    } else {
      this.esPomodoro = !this.esPomodoro;
    }

    // detiene el temporizador
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }

    // inicia el temporizador segun el modo break o pomodoro
    if (this.esPomodoro) {
      this.iniciarTemporizador(25);  // inicia el temp de 25min
    } else {
      this.iniciarTemporizador(5);  // iniciar temp de 5 min
    }
  }

  iniciarTemporizador(minutos: number) {
    let segundos = minutos * 60;

    this.intervalo = setInterval(() => {
      let minutosRestantes = Math.floor(segundos / 60);
      let segundosRestantes = segundos % 60;
      this.temporizador = `${this.formatearTiempo(minutosRestantes)}:${this.formatearTiempo(segundosRestantes)}`;
      segundos--;

      // detener el temporazidor cuando llegue a 0
      if (segundos < 0) {
        clearInterval(this.intervalo);
      }
    }, 1000);
  }

  formatearTiempo(tiempo: number) {
    return tiempo < 10 ? `0${tiempo}` : tiempo;
  }
}



