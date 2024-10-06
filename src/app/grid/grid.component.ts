import { Component, OnInit } from '@angular/core';
import { IonGrid, IonRow,IonCol,IonContent} from '@ionic/angular/standalone';

@Component({
  selector: 'gridsin',
  templateUrl: './grid.component.html',
  standalone:true,
  styleUrls: ['./grid.component.scss'],
  imports:[IonGrid, IonRow, IonCol,IonContent]
})
export class GridComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}