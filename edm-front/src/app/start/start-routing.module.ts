import { StartComponent } from './start.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: StartComponent },
  { path: "categories", loadChildren: () => import("./../category/category.module").then((m) => m.CategoryModule)},
  { path: "devices", loadChildren: () => import("./../device/device.module").then((m) => m.DeviceModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartRoutingModule { }
