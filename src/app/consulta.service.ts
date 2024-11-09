import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './productos/productos.component'; // Cambia la ruta según sea necesario

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  private apiUrl = 'https://fakestoreapi.com/products'; // URL de la API

  constructor(private http: HttpClient) { }
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl); 
  }
  getProductoDetalle(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  
  
}

