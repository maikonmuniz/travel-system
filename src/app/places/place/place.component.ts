import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../categories/category';

@Component({
  selector: 'app-place',
  standalone: false,
  templateUrl: './place.component.html',
  styleUrl: './place.component.scss'
})
export class PlaceComponent {

  fieldsForm: FormGroup;
  categories: Category[] = []

  constructor () {
    this.fieldsForm = new FormGroup({
      name: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      urlImage: new FormControl('', Validators.required),
      assessment: new FormControl('', Validators.required)
    })
  }
  save () {
    console.log(this.fieldsForm.value)
  }
}
