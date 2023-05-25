import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: 'input[type="time"]',
})
export class TimeInputDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('input')
  onInput() {
    const nativeElement = this.el.nativeElement;
    const value = nativeElement.value;

    // Format the input value to HH:mm format
    const formattedValue = this.formatTimeValue(value);

    // Set the formatted value back to the input element
    this.renderer.setProperty(nativeElement, 'value', formattedValue);
  }

  private formatTimeValue(value: string): string {
    // Modify the time value as per your desired format
    // Example: Convert 'HHmm' to 'HH:mm'
    const formattedValue = value.replace(/(\d{2})(\d{2})/, '$1:$2');
    return formattedValue;
  }
}