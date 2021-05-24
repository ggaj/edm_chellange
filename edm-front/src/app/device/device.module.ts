import { ComponentsModule } from './../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceRoutingModule } from './device-routing.module';
import { CreateDeviceComponent } from './create-device/create-device.component';
import { ListDeviceComponent } from './list-device/list-device.component';

@NgModule({
  declarations: [
    CreateDeviceComponent,
    ListDeviceComponent,
  ],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
  ]
})
export class DeviceModule { }
