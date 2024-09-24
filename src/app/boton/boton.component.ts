import { Component, OnInit } from '@angular/core';
import {IonButton} from '@ionic/angular/standalone';

@Component({
  selector: 'boton-moviles',
  templateUrl: './boton.component.html',
  standalone: true,
  styleUrls: ['./boton.component.scss'],
  imports: [IonButton]
})
export class BotonComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
