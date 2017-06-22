import { Directive, HostBinding, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDrag]',
})
export class DragDirective {
  // Required for dragablity
  @HostBinding('attr.draggable') draggable = 'true';
  @HostBinding('style.user-select') userSelect = 'none';

  @HostListener('dragstart', ['$event']) onDragStart(event: DragEvent) {
    event.dataTransfer.setData('text/plain', JSON.stringify({
      data: 'Some Data Transfered'
    }));
    console.log('Begin Drag');
  }

  @HostListener('dragend', ['$event']) onDragEnd(event: DragEvent) {
    console.log('End Drag');
  }

  constructor(private elementRef: ElementRef) {}
}
