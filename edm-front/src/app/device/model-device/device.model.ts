import { Category } from './../../category/model-category/category.model';
export interface Device {
  id?: number;
  categoryId: string;
  color: string;
  partNumber: number;
  category: Category;
}
