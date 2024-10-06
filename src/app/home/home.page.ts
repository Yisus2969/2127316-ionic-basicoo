import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
<<<<<<< HEAD
<<<<<<< HEAD
import { ListaAlumnosComponent } from '../lista-alumnos/lista-alumnos.component';

=======
import { BotonComponent } from '../boton/boton.component';
import { GridComponent } from '../grid/grid.component';
>>>>>>> 07905ce399c76d79e5c64cf04f0784c10aaa11dd
=======
import { BotonComponent } from '../boton/boton.component';
import { GridComponent } from '../grid/grid.component';
>>>>>>> 07905ce399c76d79e5c64cf04f0784c10aaa11dd

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
<<<<<<< HEAD
<<<<<<< HEAD
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,ListaAlumnosComponent],
})
export class HomePage {
  constructor() {}
}

=======
=======
>>>>>>> 07905ce399c76d79e5c64cf04f0784c10aaa11dd
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, BotonComponent, GridComponent],
 })
export class HomePage {
  constructor() {}
}
<<<<<<< HEAD
>>>>>>> 07905ce399c76d79e5c64cf04f0784c10aaa11dd
=======
>>>>>>> 07905ce399c76d79e5c64cf04f0784c10aaa11dd
