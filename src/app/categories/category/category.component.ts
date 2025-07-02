import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  fieldForm: FormGroup;

  constructor (private categoryService: CategoryService) {
    this.fieldForm = new FormGroup (
      {
        name: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required)
      }
    )
  }

  save () {
    this.fieldForm.markAllAsTouched()

    if (this.fieldForm.valid) {
      this.categoryService.
      save(this.fieldForm.value).
      subscribe({
        next: category => {
          console.log(category)
          this.fieldForm.reset()
        },
        error: erro => console.log(erro) 
      })
    }
  }

  isFieldValid (fieldName: string): boolean {
    const field = this.fieldForm.get(fieldName)
    return (field?.errors?.["required"] && field?.touched) || false;
  }
}
