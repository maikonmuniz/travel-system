import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleriesRoutingModule } from './galleries-routing.module';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    GalleriesRoutingModule
  ]
})
export class GalleriesModule { }
