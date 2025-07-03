import { Component, OnInit } from '@angular/core';
import { Place } from '../../places/place';
import { PlaceService } from '../../places/place.service';
import { CategoryService } from '../../categories/category.service';
import { Category } from '../../categories/category';

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {

  place: Place[] = [];
  category: Category[] = [];

  constructor (
    private placesService: PlaceService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.placesService.getAll().subscribe(place => this.place = place)
    this.categoryService.getAll().subscribe(category => this.category = category)
  }

  totalStar (place: Place) {
    return "&#9733;".repeat(place?.assessment || 0) + '&#9734;'.repeat(5 - (place?.assessment || 0));
  }
}
