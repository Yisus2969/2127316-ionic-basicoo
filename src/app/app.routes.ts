import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'camara',
    loadComponent: () => import('./camara/camara.component').then((m) => m.CamaraComponent),
  },
  
  // {
  //   path: 'listaAlumnos',
  //   loadComponent: () => import('./lista-alumnos/lista-alumnos.component').then((m) => m.ListaAlumnosComponent),
  // },
  // {
  //   path: 'home',
  //   loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  // },
  // {
  //   path: 'productos',
  //   loadComponent: () => import('./productos/productos.component').then((m) => m.ProductosComponent),
  // },
  // {
  //   path: 'productoDetalle/:id',  
  //   loadComponent: () => import('./producto-detalle/producto-detalle.component').then((m) => m.ProductoDetalleComponent),
  // },

  {
    path: '',
    redirectTo: '/camara',
    pathMatch: 'full', 
  }
];