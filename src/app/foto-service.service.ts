import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Foto } from './foto.model';

@Injectable({
  providedIn: 'root'
})
export class FotoServiceService {
  public fotos: Foto[] = [];

  constructor() {}

  // tomar nueva foto y agg al arreglo
  public async addNewToGallery() {
    // Tomar la foto desde la cam
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    // Insertar la foto nueva al inicio del arreglo
    this.fotos.unshift({
      filepath: '', // Deja,mos vacio ya que no estamos guardando local
      webViewPath: capturedPhoto.webPath, //  Guardar ruta web
    });

    return capturedPhoto;
  }
}
