import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDeviceComponent } from './create-device/create-device.component';
import { ListDeviceComponent } from './list-device/list-device.component';

const routes: Routes = [
  { path: "",  component: ListDeviceComponent },
  { path: "create",  component: CreateDeviceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceRoutingModule { }
