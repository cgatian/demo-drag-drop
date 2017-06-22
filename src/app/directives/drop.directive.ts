import { Directive, HostBinding, HostListener, ElementRef, Output, Input, EventEmitter, OnInit } from '@angular/core';

@Directive({
  selector: '[appDrop]'
})
export class DropDirective implements OnInit {
  private initialBackgroundColor: string;
  @HostListener('dragover', ['$event']) onDragOver(event: DragEvent) {
    // Prevent required to allow drop
    event.preventDefault();
  }

  @HostListener('dragenter') onDropHover() {
    // Invoked when mouse has entered element
  }

  @HostListener('dragleave', ['$event']) onDrageLeave(event: DragEvent) {
    this.resetHostElement();
  }

  @HostListener('drop', ['$event']) onDragEnd(event: DragEvent) {
    const dataTransfer = JSON.parse(event.dataTransfer.getData('text/plain'));
    this.resetHostElement();
    console.log(dataTransfer);
    event.preventDefault();
  }

  constructor(private elementRef: ElementRef) {
  }

;  ngOnInit() {
  }

  private resetHostElement() {
  }
}
