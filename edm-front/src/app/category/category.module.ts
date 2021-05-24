import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule }   from '@angular/forms';

import { CategoryRoutingModule } from './category-routing.module';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';


@NgModule({
  declarations: [
    ListCategoryComponent,
    CreateCategoryComponent,
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
    FormsModule,
  ],
  exports: []
})
export class CategoryModule { }
