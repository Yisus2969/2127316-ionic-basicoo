import { Component} from '@angular/core';
import { FotoServiceService } from '../foto-service.service';
import { CommonModule } from '@angular/common';
//import { FotoService } from '../foto.service';
import { IonButton, IonIcon, IonRow, IonCol, IonGrid, IonContent, IonTitle, IonToolbar, IonHeader} from '@ionic/angular/standalone';
import { Foto } from '../foto.model';
@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  standalone: true,
  styleUrls: ['./camara.component.scss'],
  imports: [IonButton, IonIcon, IonRow, IonCol, IonGrid, IonContent, IonTitle, IonToolbar, IonHeader, CommonModule]
})

export class CamaraComponent {
  public fotos: Foto[] = [];

  constructor(private fotoService: FotoServiceService) {}

  ngOnInit() {
    
    this.fotos = this.fotoService.fotos;
  }

  async tomarFoto() {
    await this.fotoService.addNewToGallery();
    // actualizar fotos locales
    this.fotos = this.fotoService.fotos;
    console.log(this.fotos); 
  }
}
