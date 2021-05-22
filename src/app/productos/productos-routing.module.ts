import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './pages/create/create.component';
import { EditComponent } from './pages/edit/edit.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { MainComponent } from './pages/main/main.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'gallery', component: GalleryComponent  },
      { path: 'edit', component: EditComponent },
      { path: 'create', component: CreateComponent },
      { path: '**', redirectTo: 'gallery' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
