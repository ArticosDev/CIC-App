import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { MainComponent } from './pages/main/main.component';
import { EditComponent } from './pages/edit/edit.component';
import { GalleryComponent } from './pages/gallery/gallery.component';


@NgModule({
  declarations: [MainComponent, EditComponent, GalleryComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
