import { Directive, HostBinding, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorEnhance]',
})
export class ColorEnhanceDirective {
  @HostBinding('style.color') color = 'orange';
  @HostBinding('style.fontWeight') fontWeight = 'bold';
}
