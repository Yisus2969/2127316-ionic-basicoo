import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { IonList, IonItem, IonLabel, IonItemOption, IonItemOptions, IonItemSliding} from '@ionic/angular/standalone';
import { ActionSheetController } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
  standalone: true,
  imports:[IonItem,IonList,CommonModule,IonLabel,IonItemSliding,IonItemOptions,IonItemOption, NgFor]
})
export class ListaAlumnosComponent  implements OnInit {

  

  alumnos: string[] = [
    "Jesus Angel", 
    "Leo", 
    "Dayla", 
    "Keyla"
  ];
  constructor(private actionSheetController:ActionSheetController) { }
  ngOnInit() {}
    async agregarAFavoritos(alumno: string) {
      console.log(`${alumno} agregado a favoritos`);
    
    }

    async eliminarAlumno(alumno: string) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Confirmar Eliminación',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log(`${alumno} eliminado`);
            this.alumnos = this.alumnos.filter(a => a !== alumno);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            console.log('Eliminación cancelada');
          }
        }
      ]
    });
    await actionSheet.present();
    }
}
