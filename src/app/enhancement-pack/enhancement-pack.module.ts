import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorEnhanceDirective } from './color-enhanced.directive';

@NgModule({
  declarations: [ ColorEnhanceDirective ],
  imports: [ CommonModule ],
  exports: [ ColorEnhanceDirective ],
  providers: [],
})
export class EnhancementPackModule {}
