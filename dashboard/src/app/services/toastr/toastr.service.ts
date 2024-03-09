import { Injectable } from '@angular/core'
import { Dismiss, DismissInterface, DismissOptions, InstanceOptions } from 'flowbite'

@Injectable({
  providedIn: 'root',
})
export class ToastrService {
  dismissToaster($targetEl: HTMLElement, $triggerEl: HTMLElement) {
    const options: DismissOptions = {
      transition: 'transition-opacity',
      duration: 1000,
      timing: 'ease-out',
    }
    const instanceOptions: InstanceOptions = {
      id: 'targetElement',
      override: true,
    }
    const dismiss: DismissInterface = new Dismiss($targetEl, $triggerEl, options, instanceOptions)
    dismiss.hide()
  }
}
