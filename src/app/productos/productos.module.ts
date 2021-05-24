import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductosRoutingModule } from './productos-routing.module';


import { MainComponent } from './pages/main/main.component';
import { EditComponent } from './pages/edit/edit.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { CreateComponent } from './pages/create/create.component';
import { UpdateComponent } from './pages/update/update.component';



@NgModule({
  declarations: [MainComponent, EditComponent, GalleryComponent, CreateComponent, UpdateComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductosModule { }
