import { Component} from '@angular/core';
import { FotoServiceService } from '../foto-service.service';
//import { FotoService } from '../foto.service';
import { IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  standalone: true,
  styleUrls: ['./camara.component.scss'],
  imports: [IonButton, IonIcon]
})
export class CamaraComponent {
  constructor(private fotoService: FotoServiceService) {}

  async tomarFoto() {
    const foto = await this.fotoService.addNewToGallery();
    console.log(foto);
  }
 }
