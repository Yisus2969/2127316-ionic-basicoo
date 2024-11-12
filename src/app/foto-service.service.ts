import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class FotoServiceService {

  constructor() { }

  public async addNewToGallery() {    

    // Toma Foto    
    //const capturedPhoto = {
      //webPath: 'https://via.placeholder.com/150', // Puse una de prueba ya que como no tenia camara en el momemnto jajja
    //};
    const capturedPhoto = await Camera.getPhoto({      
    
    resultType: CameraResultType.Uri,      
    
    source: CameraSource.Camera,      quality: 100    
    
    });
    return capturedPhoto;
   } }
