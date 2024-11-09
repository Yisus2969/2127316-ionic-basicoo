import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonContent, IonHeader } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonContent, IonHeader],
})
export class AppComponent {
  constructor() {}
}