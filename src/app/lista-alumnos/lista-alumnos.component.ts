import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { IonList, IonCheckbox, IonItem,IonContent, IonHeader, IonLabel, IonInput, IonButton, IonItemOption, IonItemOptions, IonItemSliding } from '@ionic/angular/standalone';
//import { IonList, IonItem, IonLabel, IonCheckbox, IonButton, IonInput, IonContent, IonHeader, IonToolbar, IonTitle, ActionSheetController } from '@ionic/angular/standalone'; // Importar FormsModule para usar NgModel
import { ActionSheetController } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { alumno } from '../alumno.model';
//import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
  standalone: true,
  //imports: [FormsModule,IonList, IonItem, IonLabel, IonCheckbox, IonButton, IonInput, IonContent, IonHeader, IonToolbar, IonTitle,CommonModule, NgIf,NgFor]
  imports: [IonItem, IonList, IonCheckbox, IonHeader, IonContent,IonInput, CommonModule, IonLabel, IonItemSliding, IonItemOptions, IonItemOption, NgFor, NgIf, FormsModule, IonButton]
})
export class ListaAlumnosComponent implements OnInit {
  
  alumno: alumno = {
    nombre: '',
    presente: false
  };

  alumnos: alumno[] = []; // Array para almacenar los alumnos

  constructor(private actionSheetCtrl: ActionSheetController) {}

  ngOnInit() {}

  agregarAlumno(): void {
    if (this.alumno.nombre.trim() !== '') { // Asegurarse de que el nombre no esté vacío
      this.alumnos.push(this.alumno);

      // Reiniciar alumno para el siguiente ingreso
      this.alumno = {
        nombre: '',
        presente: false
      };
    } else {
      console.error("El nombre del alumno es requerido");
    }
  }
}
