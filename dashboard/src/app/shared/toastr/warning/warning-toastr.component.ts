import { ToastrService } from '@services/toastr/toastr.service'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-toastr',
  templateUrl: './warning-toaster.component.html',
})
export class WarningToastrComponent {
  @Input() message: string = ''

  constructor(private toastr: ToastrService) {
    this.initToastr()
  }
  initToastr() {
    const $targetEl: HTMLElement = document.getElementById('toast-warning')!
    const $triggerEl: HTMLElement = document.getElementById('toast-close')!
    this.toastr.dismissToaster($targetEl, $triggerEl)
  }
}
