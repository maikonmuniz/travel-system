import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../categories/category';
import { CategoryService } from '../../categories/category.service';
import { PlaceService } from '../place.service';

@Component({
  selector: 'app-place',
  standalone: false,
  templateUrl: './place.component.html',
  styleUrl: './place.component.scss'
})
export class PlaceComponent implements OnInit {

  fieldsForm: FormGroup;
  categories: Category[] = []

  constructor (
    private categoryServices: CategoryService,
    private servicesPlaces: PlaceService
  ) {
    this.fieldsForm = new FormGroup({
      name: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      urlImage: new FormControl('', Validators.required),
      assessment: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    this.categoryServices.getAll().subscribe({
      next: (allCategory) => {
        this.categories = allCategory
        console.log(this.categories)
      }
    })
  }

  save () {
    this.servicesPlaces.save(this.fieldsForm.value).subscribe({
      next: (result) => {
        console.log(result)
        this.fieldsForm.reset()
      }
    })
    console.log(this.fieldsForm.value)
  }

    isFieldValid (fieldName: string): boolean {
    const field = this.fieldsForm.get(fieldName)
    return (field?.errors?.["required"] && field?.touched) || false;
  }
}
