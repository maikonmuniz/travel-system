import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: 'category',
        loadChildren: () => import('../categories/categories.module').then(module => module.CategoriesModule),
        pathMatch: 'full'
      },
      {
        path: 'places',
        loadChildren: () => import('../places/places.module').then(module => module.PlacesModule),
        pathMatch: 'full'
      },
      {
        path: 'gallery',
        loadChildren: () => import('../galleries/galleries.module').then(module => module.GalleriesModule),
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
