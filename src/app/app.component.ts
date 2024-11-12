import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { HomePage } from "./home/home.page";
import { PomodoroComponent } from './pomodoro/pomodoro.component';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, HomePage, PomodoroComponent],
})
export class AppComponent {
  constructor() {}
}
