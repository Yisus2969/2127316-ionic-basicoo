import { Component, OnInit,AfterViewInit } from '@angular/core';
import { IonButton,IonLabel,IonInput } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
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