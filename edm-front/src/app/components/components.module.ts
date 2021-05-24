import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnSaveComponent } from './btn-save/btn-save.component';
import { AlertErrorComponent } from './alert-error/alert-error.component';
import { AlertConfirmationComponent } from './alert-confirmation/alert-confirmation.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BtnSaveComponent,
    AlertErrorComponent,
    AlertConfirmationComponent,
    LoadingComponent,
  ],
  exports: [
    BtnSaveComponent,
    AlertErrorComponent,
    AlertConfirmationComponent,
    LoadingComponent,
  ]
})
export class ComponentsModule { }
