/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloukitIconComponent } from './icon.component';
import { IconService } from './icon.service';
import { CloukitIcons } from './icon.paths';

@NgModule({
  imports: [ CommonModule ],
  exports: [ CloukitIconComponent ],
  declarations: [ CloukitIconComponent ],
  providers: [ IconService ],
  entryComponents: [ ],
})
export class CloukitIconModule {
  constructor(private iconService: IconService) {
    //
    // Register default icons with their names.
    // If already another icon is registered, it will not be overridden.
    //
    const iconNames = Object.keys(CloukitIcons);
    for (let i=0; i<iconNames.length; i++) {
      if (this.iconService.getIconPathD(iconNames[i]) === undefined) {
        this.iconService.registerIcon(iconNames[i], CloukitIcons[iconNames[i]]);
      }
    }
  }
}
