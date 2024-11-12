import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';
import { ActivatedRoute } from '@angular/router';
import { IonContent,IonCard,IonCardContent,IonCardTitle,IonToolbar,IonTitle,IonHeader } from '@ionic/angular/standalone';
import { CurrencyPipe } from '@angular/common';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.scss'],
  imports:[IonCard,IonCardContent,IonContent,IonCardTitle,CurrencyPipe,NgIf,IonToolbar,IonTitle,IonHeader],
  standalone: true
})
export class ProductoDetalleComponent implements OnInit {
 
   

  constructor(private consulta: ConsultaService, private ruta: ActivatedRoute) { }

  producto: any = {};  
  
  ngOnInit() {
    const idProducto = this.ruta.snapshot.paramMap.get('id'); 
    if (idProducto) {
      this.realizarConsultaDetalle(idProducto);  
    }
  }

  realizarConsultaDetalle(idProducto: string): void {
    this.consulta.getProductoDetalle(idProducto)
      .subscribe((resp: Object) => { //toma la respuesta de la consulta al servidor
        console.log(resp); //imprime  la respuesta en consola
        this.producto = resp; //asigna la respuesta a producto
      });
  }
}
