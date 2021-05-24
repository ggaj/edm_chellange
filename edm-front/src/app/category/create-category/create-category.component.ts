import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service-category/category.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../model-category/category.model';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {

  categoryForm!: FormGroup
  loading!: boolean

  constructor(
    private service: CategoryService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
   }

  ngOnInit() {
    this.loading = false;
    this.categoryForm = this.formBuilder.group({
      name: [null, [ Validators.required, Validators.maxLength(1), Validators.email ]]
    })
  }

  onSubmit(){

    this.loading = true;

    const category = this.categoryForm.getRawValue() as Category;

    this.service.create(category.name).subscribe(
      (_) => {
        this.categoryForm.reset()
        this.router.navigateByUrl('categories')
      },
      //TODO: update screen with data backend
      (error: any) => console.error(error),
      () => this.loading = false
    )
  }
}
