import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloukitIconModule } from '../index';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [ DemoComponent ],
  exports: [ DemoComponent ],
  imports: [
    CommonModule,
    CloukitIconModule,
  ],
  providers: [ ],
  bootstrap: [ ]
})
export class DemoModule {}
