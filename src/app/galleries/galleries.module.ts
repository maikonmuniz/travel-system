import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleriesRoutingModule } from './galleries-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    GalleriesRoutingModule,
    FormsModule
  ]
})
export class GalleriesModule { }
