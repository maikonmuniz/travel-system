import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  fieldForm: FormGroup;

  constructor () {
    this.fieldForm = new FormGroup (
      {
        name: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required)
      }
    )
  }

  save () {
    console.log("valores", this.fieldForm.value)
  }
}
