import { NgModule } from '@angular/core'
import { WarningToastrComponent } from './toastr/warning/warning-toastr.component'
import { ErrorToastrComponent } from './toastr/error/error-toastr.component'
import { SuccessToastrComponent } from './toastr/success/success-toastr.component'

@NgModule({
  declarations: [WarningToastrComponent, ErrorToastrComponent, SuccessToastrComponent],
  exports: [WarningToastrComponent, SuccessToastrComponent, ErrorToastrComponent],
})
export class SharedModule {}
