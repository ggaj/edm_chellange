import { Observable } from 'rxjs';
import { Category } from './../../category/model-category/category.model';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category/service-category/category.service';
import { DeviceService } from '../service-device/device.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Device } from '../model-device/device.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-device',
  templateUrl: './create-device.component.html',
  styleUrls: ['./create-device.component.scss']
})
export class CreateDeviceComponent implements OnInit {

  categories!: Observable<Category[]>
  deviceForm!: FormGroup
  loading!: boolean

  constructor(
    private categoryService: CategoryService,
    private deviceService: DeviceService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.loading = false;
    this.categories = this.categoryService.index();

    this.deviceForm = this.formBuilder.group({
      categoryId: [null, Validators.required],
      color: [null, [Validators.required, Validators.maxLength(16), Validators.pattern("^[a-zA-Z]*$")]],
      partNumber: [null, [Validators.required, Validators.min(1)]]
    })
  }

  onSubmit() {
    this.loading = true;

    const device = this.deviceForm.getRawValue() as Device;

    this.deviceService.create(device).subscribe(
      () => {
        this.onReset()
        this.router.navigateByUrl('devices')
      },
      //TODO: update screen with data backend
      (error: any) => console.error(error),
      () => this.loading = false
    )
  }

  onReset() {
    this.deviceForm.reset()
  }
}
